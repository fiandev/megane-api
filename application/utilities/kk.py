import json, datetime
from application.constants.pathfiles import LIST_DISTRICTS_PATHFILE, LIST_SUBDISTRICTS_PATHFILE, LIST_DATA_PATHFILE

days = ("Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu")

def parse_district (uid):
    items = []
    
    """
    mencari data kota/kabupaten di file kabupaten dengan id tertentu
    input misal: 0101
    provinsi: 01
    kota: 01
    """
    with open(LIST_DISTRICTS_PATHFILE + f"/{ uid[0:2] }.json") as file:
        content = file.read()
        items = json.loads(content)
        file.close()
        
    for item in items:
        if (item["id"] == uid):
            return item["nama"]
    else:
        return None

def parse_subdistrict (uid):
    items = []
    
    """
    mencari data kecamatan di file kecamatan dengan id tertentu
    input misal: 010102
    provinsi: 01
    kabupaten: 01
    kecamatan: 02
    """
    with open(LIST_SUBDISTRICTS_PATHFILE + f"/{ uid[0:4] }.json") as file:
        content = file.read()
        items = json.loads(content)
        file.close()
        
    for item in items:
        if (item["id"] == uid):
            districts = []
            with open(LIST_DATA_PATHFILE + "/districts.json") as file:
                districts = json.loads(file.read())
                file.close()
            
            for district in districts:
                if district["name"].upper() == item["nama"].upper():
                    return {
                      "name": item["nama"],
                      "latitude": district["latitude"],
                      "longitude": district["longitude"],
                    }
                    
    else:
        return None

def parse_province (uid):
    items = []
    
    """
    mencari data kota/kabupaten di file kabupaten dengan id tertentu
    input misal: 0101
    provinsi: 01
    kota: 01
    """
    with open(LIST_DATA_PATHFILE + f"/provinces.json") as file:
        content = file.read()
        items = json.loads(content)
        file.close()
        
    for item in items:
        if (item["id"] == uid):
            return {
              "name": item["name"],
              "latitude": item["latitude"],
              "longitude": item["longitude"],
            }
    else:
        return None

def parse_birthdate (d, m, y):
    global days
    months = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "October", "November", "December"]
    today = datetime.date.today()
    
    year = (int(str(today.year)[0]) * 1000) + int(y)
    year = year if year <= today.year else ((int(str(today.year)[0]) - 1) * 1000) + int(y)
    
    birthdate = f"{ d }-{ m }-{ year }"
    date = datetime.datetime.strptime(birthdate, "%d-%m-%Y")
    
    return {
      "month": months[int(m[1]) - 1],
      "date": d,
      "year": year,
      "day": days[date.weekday()]
      # "pasaran": cari_pasaran(f"{ d }-{ m }-{ year }"),
    }

def cari_pasaran(birthdate):
    """
    Mencari pasaran tanggal Jawa.
  
    Args:
      tanggal: Tanggal Jawa dalam format DD-MM-YYYY.
  
    Returns:
      Pasaran tanggal Jawa.
    """
    days = ("Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu")
    pasaran = ("Legi", "Pahing", "Pon", "Wage", "Kliwon")
    
    date = datetime.datetime.strptime(birthdate, "%d-%m-%Y")
    day = date.weekday()
    month = date.month
    year = date.year
    
    tahun_jawa = (year - 4) % 7
    angka_pasaran = ((int(str(year)[1:4])) + 2) % 7
    
    
    index_pasaran = ((day + 1) + month + year) % 7
  
    # Mengembalikan pasaran tanggal Jawa.
  
    return days[day] + pasaran[index_pasaran]

