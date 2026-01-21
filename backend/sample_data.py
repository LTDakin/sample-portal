import datetime

# Sample IDs as keys for O(1) lookup as well as mocking an indexed UUID in mongoDB

temp_db = {
    1: {
        'name': 'Zymo',
        'date_of_birth': datetime.date(1994, 9, 27),
    },
    2: {
        'name': 'Covid-19',
        'date_of_birth': datetime.date(2020, 2, 11),
    },
}
