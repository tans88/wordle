from flask import Flask, request
import random

app = Flask(__name__)

# helpers

# load all English words from dataset
def load_words():
  with open("words/words.txt", "r") as file:
    words = [word.strip() for word in file.readlines()]
  return words

# load all valid guesses from dataset
def load_valid_guesses():
  with open("words/valid_guesses.txt", "r") as file:
    valid_guesses = [word.strip() for word in file.readlines()]
  return valid_guesses

# check for matches between chosen word and guess word
def process_guess_word(chosen_word, guess_word):
  res = []

  for p in range(5):
    if chosen_word[p] == guess_word[p]:
      res.append("green")
    elif guess_word[p] in chosen_word:
      res.append("yellow")
    else:
      res.append("black")

  return res

# endpoints

# choose a random English word
@app.route("/get_random_word", methods=["GET"])
def get_random_word():
  words = load_words()
  chosen_word = random.choice(words)
  return {
    "word": random.choice(words)
  }

# get a guess word from user
@app.route("/get_guess_word", methods=["GET"])
def get_guess():
  data = request.get_json()
  if not data or "guess" not in data:
    return {"error": "No input"}, 400
  
  guess = data["guess"]
  if len(guess) != 5:
    return {"error": "Not enough letters"}, 400

  valid_guesses = load_valid_guesses()
  if guess_word not in valid_guesses:
    return {"error": "Not in word list"}, 400

  return {
    "guess": guess
  }

# check for letter matches
@app.route("/check", methods=["GET"])
def check():
  data = request.get_json()
  if not data or "chosen_word" not in data or "guess_word" not in data:
    return {"error": "Error processing"}, 500

  chosen_word = data["chosen_word"]
  guess_word = data["guess_word"]
  res = process_guess_word(chosen_word, guess_word)

  return {
    "result": res
  }


if __name__ == "__main__":
  app.run(debug=True)