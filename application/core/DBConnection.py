import dns.resolver
import socket
import datetime
import pytz
from pymongo import MongoClient, DESCENDING

timezone = pytz.timezone('Asia/Jakarta')
dns.resolver.default_resolver = dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers = ["8.8.8.8"]

class DBConnection:
  def __init__(self, username, password, cluster, client):
    self.client = MongoClient(f"mongodb+srv://{username}:{password}@{cluster}/?retryWrites=true&w=majority")
    self.db = self.client[client]

  def create(self, data, table):
    self.db[table].insert_one(data)

  def asc(self, field, table, filter_criteria=None):
    return self.db[table].find(filter_criteria).sort(field)
    
  def desc(self, field, table, filter_criteria=None):
    return self.db[table].find(filter_criteria).sort(field, -1)
    
  def limit(self, limit, table, filter_criteria=None):
    return self.db[table].find(filter_criteria).limit(limit)
  
  def all(self, table, filter_criteria=None):
    return self.db[table].find(filter_criteria)

  def count(self, table, filter_criteria=None):
    if filter_criteria == None:
      return self.db[table].count_documents({})
    else:
      return self.db[table].count_documents(filter_criteria)

  def find(self, filter_criteria, table):
    return self.db[table].find_one(filter_criteria)

  def search(self, page, keyword, table, field, sort=None, minimal=9):
    if page != None:
      skip_value = (page - 1) * minimal
    if sort == "asc":
      if page != None:
        return self.db[table].find({field: {"$regex": keyword, "$options": "i"}}).skip(skip_value).limit(minimal).sort(field)
      else:
        return self.db[table].find({field: {"$regex": keyword, "$options": "i"}}).sort(field)
    elif sort == "desc":
      if page != None:
        return self.db[table].find({field: {"$regex": keyword, "$options": "i"}}).skip(skip_value).limit(minimal).sort(field, -1)
      else:
        return self.db[table].find({field: {"$regex": keyword, "$options": "i"}}).sort(field, -1)
    else:
      if page != None:
        return self.db[table].find({field: {"$regex": keyword, "$options": "i"}}).skip(skip_value).limit(minimal)
      else:
        return self.db[table].find({field: {"$regex": keyword, "$options": "i"}})

  def update(self, filter_criteria, new_values, table):
    self.db[table].update_one(filter_criteria, {"$set": new_values})

  def delete(self, filter_criteria, table):
    self.db[table].delete_many(filter_criteria)

  def datenow(self):
    now = datetime.datetime.now(timezone)
    return now.strftime("%d-%m-%Y %H:%M")
    
  def pagination(self, page, collection, filter_criteria=None, minimal=9):
    skip_value = (page - 1) * minimal
    data = self.db[collection].find(filter_criteria).skip(skip_value).limit(minimal).sort('$natural',DESCENDING)
    return data