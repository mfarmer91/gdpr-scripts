import requests

POST-LOGIN-URL = <insert url here>
REQUEST-URL = <insert url here>

payload = {
    ##change payload keys to specific requests made in in Network tab
    ##usually found on the /sign-in or /login request towards the bottom
    'admin[email]': <insert username here>,
    'admin[password]': <insert password here>,
    'csrf-token': <insert csrf-token here>
    }

with requests.Session() as session:
    ##good for scraping of non-JSON pages
    post = session.post(POST-LOGIN-URL, data=payload)
    r = session.get(REQUEST-URL)
    print(r.text)   
