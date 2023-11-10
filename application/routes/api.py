from flask import jsonify
from application.core.server import server
from application.controllers.api.PopulationDataController import PopulationDataController
from application.controllers.api.RegionOfIndonesiaController import RegionOfIndonesiaController
from application.controllers.api.PhoneNumberController import PhoneNumberController
from application.controllers.api.LaheluController import LaheluController

@server.route('/api/test')
def Test ():
    return jsonify({
      "status": 200,
      "message": "ok"
    })

@server.route('/api/cek-nik')
@server.route('/api/check-nik')
def NIK():
    return PopulationDataController.ID_number()

@server.route('/api/district')
@server.route('/api/kabupaten')
def search_district():
    return RegionOfIndonesiaController.search_district()

@server.route('/api/province')
@server.route('/api/provinsi')
def search_province():
    return RegionOfIndonesiaController.search_province()

@server.route('/api/check-number')
def check_number ():
    return PhoneNumberController.check_number()

@server.route('/api/generator/phone-number/')
def phone_number ():
    return PhoneNumberController.generator()

@server.route('/api/generator/phone-number/provider/<provider_slug>')
def phone_number_specific_provider ():
    pass

@server.route('/api/generator/phone-number/providers')
def phone_number_providers ():
    pass

@server.route("/api/lahelu/all")
def lahelu_all ():
    return LaheluController.all_memes()

@server.route("/api/lahelu/downloader")
def lahelu_downloader ():
    return LaheluController.downloader()
