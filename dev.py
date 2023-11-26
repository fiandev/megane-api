from flask import Flask, render_template
from application.config import config
from application.controllers.api.PopulationDataController import PopulationDataController
from application.controllers.api.RegionOfIndonesiaController import RegionOfIndonesiaController
from application.controllers.api.PhoneNumberController import PhoneNumberController
from application.controllers.api.LaheluController import LaheluController
from application.controllers.api.ShortLinkController import ShortLinkController
from application.controllers.api.QuranController import QuranController
from application.controllers.api.SocialMediaController import SocialMediaController

app = Flask(__name__, template_folder="./application/resources/views")
app.secret_key = config["key"]
app.config['SECRET_KEY'] = config["key"]
app.url_map.strict_slashes = False

# web routes

@app.route("/")
def Home ():
    return render_template("index.html")


@app.route("/terms-and-conditions")
def Term_and_Conditions ():
    return render_template("terms-and-conditions.html")

# api routes
@app.route('/api/cek-nik')
@app.route('/api/check-nik')
def NIK():
    return PopulationDataController.ID_number()

@app.route('/api/district')
@app.route('/api/kabupaten')
def search_district():
    return RegionOfIndonesiaController.search_district()

@app.route('/api/province')
@app.route('/api/provinsi')
def search_province():
    return RegionOfIndonesiaController.search_province()

@app.route('/api/check-number')
def check_number ():
    return PhoneNumberController.check_number()

@app.route('/api/generator/phone-number/')
def phone_number ():
    return PhoneNumberController.generator()

@app.route('/api/generator/phone-number/provider/<provider_slug>')
def phone_number_specific_provider ():
    pass

@app.route('/api/generator/phone-number/providers')
def phone_number_providers ():
    pass

@app.route("/api/lahelu/all")
def lahelu_all ():
    return LaheluController.all_memes()

@app.route("/api/lahelu/downloader")
def lahelu_downloader ():
    return LaheluController.downloader()

@app.route("/api/shortlink")
@app.route("/api/short-link")
def short_link ():
    return ShortLinkController.generate()

@app.route("/api/quran/surah/all")
@app.route("/api/al-quran/surah/all")
def list_surah ():
    return QuranController.list_surah()

@app.route("/api/quran/surah/<surah_id>")
@app.route("/api/al-quran/surah/<surah_id>")
def show_surah (surah_id):
    return QuranController.show_surah(surah_id)

@app.route("/api/quran/juz/<juz_id>")
@app.route("/api/al-quran/juz/<juz_id>")
def show_juz (juz_id):
    return QuranController.show_juz(juz_id)

@app.route("/api/quran/jelajahi")
@app.route("/api/quran/discovery")
@app.route("/api/al-quran/jelajahi")
@app.route("/api/al-quran/dicovery")
def search_quran ():
    return QuranController.search_quran()

@app.route("/api/ig/downloader")
@app.route("/api/instagram/downloader")
def ig_downloader ():
    return SocialMediaController.ig_downloader()

@app.route("/api/tiktok/downloader")
def tiktok_downloader ():
    return SocialMediaController.tiktok_downloader()

@app.route("/api/tiktokslide/downloader")
@app.route("/api/tiktok/images")
@app.route("/api/tiktok/slides")
def tiktok_slide_downloader ():
    return SocialMediaController.tiktok_slide_downloader()

@app.route("/api/tiktok/random")
@app.route("/api/tiktok/random-post")
def tiktok_random_user_post ():
    return SocialMediaController.tiktok_random_user_post()

@app.route("/api/tiktok/statistic")
@app.route("/api/tiktok/statistics")
@app.route("/api/tiktok/stats")
def tiktok_statistic ():
    return SocialMediaController.tiktok_statistic()


if __name__ == "__main__":
    app.run(debug=True)