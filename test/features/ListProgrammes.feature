Feature: List programmes by search
    When user enters a search text
    the application shows al list of
    programmes for each character
    in the search string

    Scenario: generate the a url path for the request
        Given a term set to a
        Then a valid url path should be returned
