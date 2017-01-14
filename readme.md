# Projekt - Wypożyczelnia wideo

## Widoki:
* Ekran główny (lista + koszyk)
* Potwierdzenie zamówienia
* 'O nas'

### Ekran główny
##### Koszyk
* Każdy wpis zawiera nazwę filmu oraz jego koszt wypożyczenia,
* Podsumowanie zawiera całkowity koszt wypożyczanych filmów,
* Użytkownik może usuwać dodane elementy,
* Zawiera przycisk 'Zamów', który przeniesie do potwierdzenia zamówienia,
* Odświeżanie strony *nie* musi przywracać naszego poprzedniego koszyka.

##### Lista
* Pobrana lista z serwera.
* Każdy wpis wyświetla nazwę filmu, kategorię, koszt wypożczenia oraz informację czy jest dostępny do wypożyczenia,
* Użytkownik może dodać dostępne filmy do koszyka,
* Lista umożliwia filtrowanie po kategoriach,
 * Filtrowanie po kategoriach zmienia stan (umożliwia skopiowanie linku do danej kategorii).

### Finalizowanie zamówienia
* Wymaga podania danych kontakowych (imię, nazwisko, numer tel.),
* Formularz waliduje podane dane (niepuste imię i naziwsko, numer telefonu wymagający podania 9 lub 10 liczb - nr. komórkowy lub stacjonarny, można zastosować regex),
* Ekran pokazuje koszyk w formie do odczytu,
* Dostępny jest przycisk pozwalający cofnąć się do poprzedniego ekranu,
* Dostępny jest przycisk pozwalający zatwierdzenie zamówienia.
 * Naciśnięcie przycisku wysyła zapytanie post do serwera,
 * Pokazuje komunikat błędu zwróconego przez serwer, jeśli taki wystąpi,
 * Przejdzie do ekranu list i wyświetli komunikat 'Wypożyczono!', jeśli zapytanie wykonia się poprawnie,
 * Jest nieaktywny jeśli formularz jest niepoprawny.

### O nas
* Pokazuje dane udostępnione przez serwer.

## Ścieżki:
* /list
* /list/:category
* /order
* /about

## Końcówki serwera:
* GET /api/movies
* GET /api/movies/:categoryId
* GET /api/about
* POST /api/borrow
```javascript
//payload structure for POST /api/borrow
{
    form: {
        firstName: 'string',
        lastName: 'string',
        phone: 'number'
    }
    movieIds: [1,2,2,3]
}
```