from flask import jsonify
from app.core.server import server
from app.controllers.api.PopulationDataController import PopulationDataController
from app.controllers.api.RegionOfIndonesiaController import RegionOfIndonesiaController

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

