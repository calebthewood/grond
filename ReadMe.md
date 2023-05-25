# Grond: A Workout App
### AKA Karissa's weekend project.

Grond is a Card-based workout app. It allows you to create workout cards for excercises like push-ups, squats, lunges, etc., and assemble them into decks with additional rules such as the number of reps per exercise or timed intervals. Users will be able to create their own decks and cards or choose from premade decks.

## Breakdown

App will contain decks of workout cards, and the ability to create new cards and decks as needed. If I can get a userbase going then the next step is to add a deck market where you can buy premade decks, tailor made by professionals. Functionality will be built in to allow you to make any deck you want so there's no "need" to buy decks, but I'm assuming folks won't mind paying a dollor or two (3?) for consistency and quality.

## Component Outline

### Deck List

- The homescreen, scroll thru your decks, click on one to quickly start a workout.
  - 'Decks' button: view deck (later this will be both create or download deck)
  - 'Cards' button: view cards, if you've bought marketplace cards, they'll be here too.
  - Later: put in some historic stats, ex: last deck used, # of completions, etc.

### Create Deck

- Screen A: Select cards to include in list
- Screen B: Order cards sequentially
- Save Deck locally (later, set up acct system to sync decks, handle payment, track historic data, etc. yes, lots of work here)

### Create Card
- Form that mimics shape of card
  - add title, reps, timer, steps

### Card List

- List out all available cards, edit or remove them.
- Options to filter by category.
  - Note, add categories to workout data model. ex: arms, chest, legs, core, cardio, weights, calistenics (is that no weights?), resistance, equipment(y/n). I'm thinking of addition it as a list of attributes. So like:

  ```
    name: 'push-ups',
    traits: ['chest', 'arms', 'weights', 'equipment', 'dumbells'],
    ...etc
  ```
