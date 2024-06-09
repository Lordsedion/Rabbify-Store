from pyngrok import ngrok
from flask import Flask

app = Flask(__name__)
NGROK_AUTH_TOKEN = "2bxCeNLdEPXqwYnFrYLNpTUuWxA_KeT8YCLvoZ4oBktaS6Ev"


if __name__ == '__main__':
    ngrok.set_auth_token(NGROK_AUTH_TOKEN)

    # Create a secure tunnel to the Flask app
    public_url = ngrok.connect(8000)
    print(f"Server running at: {public_url}")
    app.run()
