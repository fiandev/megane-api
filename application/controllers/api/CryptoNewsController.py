from application.utilities.response import api_response_error, api_response_success
from application.models.CryptoNews import CryptoNews

class CryptoNewsController:

    def get_latest():
        try:
            data = CryptoNews.get_latest()
            return api_response_success(data)
        except Exception as e:
            return api_response_error(str(e), 500)