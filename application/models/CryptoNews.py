import requests, json
from bs4 import BeautifulSoup
from application.utilities.cache import cache

class CryptoNews:
    def __init__(self):
        self.CRYPTO_NEWS_BASE_URL = "https://crypto.news/"

    @staticmethod
    def get_latest():
        _self = CryptoNews()

        try:
            response = requests.get(_self.CRYPTO_NEWS_BASE_URL)

            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                
                news_list = soup.select(".home-latest-news__item.home-latest-news-item")
                
                results = []

                for news in news_list:
                    title = news.get_text(strip=True)
                    link = news.get("href")
                    results.append({
                        "title": title, 
                        "link": link,
                        "article": _self.get_news_by_url(link)
                    })
                return json.loads(cache (f"cryptonews.get_latest", json.dumps(results), 60))
            else:
                print(f"Failed to retrieve page, status code: {response.status_code}")
                return []
        except Exception as e:
            raise e
    
    @staticmethod
    def get_news_by_url (url):
        _self = CryptoNews()

        try:
            response = requests.get(url)
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                content = ""
                
                for paragrapgh in soup.select(".post-detail__content.blocks p"):
                    content += paragrapgh.get_text(strip=True) + "\n"
                
                return {
                    "headline": soup.select_one(".post-detail__title").get_text(strip=True),
                    "published_at": soup.select_one(".post-detail__date").get_text(strip=True),
                    "author": {
                        "avatar": soup.select(".author-list__image img")[0].get("src") or None,
                        "profile_url": soup.select(".author-list__link")[0].get("href"),
                        "name": soup.select(".author-list__name")[0].get_text(strip=True)
                    },
                    "editor": {
                        "avatar": soup.select(".author-list__image img")[1].get("src") or None,
                        "profile_url": soup.select(".author-list__link img")[1].get("href") or None,
                        "name": soup.select(".author-list__name")[1].get_text(strip=True) or None
                    },
                    "content": content
                }
            else:
                print(f"Failed to retrieve page, status code: {response.status_code}")
                return []
        except Exception as e:
            raise e