# Organizacja
Przygotowanie w sekcji "Wymagane rzeczy" i uruchomienie aplikacji w sekcji "Pierwsze uruchomienie" możecie zrobić jeszcze przed obejrzeniem poradnika. 

## Poradnik - chyba obowiązkowy 😄 
Polecam kanał "Twórca stron" na YT a dokładnie ten [filmik](https://youtu.be/Qz7swLxNS0Y). W nim przez pierwsze 42 minuty jest takie wprowadzenie, a dopiero od 42 minuty jest pokazane to środowisko w jakim będziemy pracować hahah. Pozatym On tam też pokazuje też coś takiego jak komponenty klasowe, my będziemy używali tylko komponentów funkcyjnych. Polecam obejrzenie tego filmu całego, ja go dawno temu oglądałem i nie pamietam już co tam mówił dokładnie, ale wiem na pewno, że w jasny sposób pokaże co to jest React i dlaczego się go stosuje i po prostu jak się tworzy te komponenty.

Ewentualnie jest też [Samouczek Reacta](https://pl.reactjs.org/tutorial/tutorial.html) po polsku i też tak fajnie wprowadza w reacta, ale to jest w formie czytania. Ja wolę słuchać kogoś i patrzeć jak pokazuje, ale jak kto woli.

Z firebasem ja się muszę zaznajomić też, ale najważniejsze dwa pojęcia z backendem przy tworzeniu stron internetowych to "zapytania do API" i format "JSON"

Moje słowa otuchy - dacie radę, nie ważne, że nie będziecie wiedzili co się dzieje, ważne żeby doprowadzić tą aplikację do finiszu 💙

## Wymagane rzeczy
- Oczywiście GIT oraz jakiś IDE (ja korzystam z Visual Studio Code).
- [Node.js](https://nodejs.org/en/) w wersji 16.13.0 LTS. Zainstalować z domyślnymi opcjami.
- Po zainstalowaniu Node.js otwieracie konsole (np. powerShell w windowsie) i wpisujecie polecenie: ```npm install --global yarn```
- Jeśli jeszcze nie macie to klonujecie to repozytorium w jakieś miejsce ```git clone https://github.com/Gacus/sparly.git```


## Pierwsze uruchomienie
Jak sklonujecie z repozytorium to trzeba dobudować do tego projektu resztę plików. To się robi poleceniami w konsoli, ja w Visual Studio Code sobie otwieram okno z konsolą (Terminal -> Nowy terminal), ale równie dobrze można to robić w zwykłej konsoli.
- Upewnijcie się, że jesteście w folderze z projektem (C:\costam\sparly).
- Odpalcie polecenie ```yarn```
- Teraz przez jakiś czas będzie sie to środowisko tworzyło
- Jeśli będą się pojawiać ostrzeżenia o różnych rzeczach - to spoko, to jest normalne xD
- Po zakończeniu możecie spróbować odpalić serwer poleceniem ```yarn start```
- Powinna się z automatu w przeglądarce uruchomić karta z projektem na adresie [localhost:3000](http://localhost:3000)
- Jeżeli wszystko jest ok to w konsoli powinien być widoczny napis "Compiled successfully!" a strona w przegladarce powinna być widoczna i działać.
- Jeżeli chcemy zamknąć serwer to w terminalu CTRL+C, albo po prostu zamykamy VisualStudioCode, albo samą konsole w zależnosci gdzie wpisujecie te polecenia.
- Potem już tylko używamy ```yarn start``` do odpalenia serwera

## Zasady commitowania zmian
- to co będzie commitowane na main powinno działać, to znaczy, że nie dopuśćmy do sytuacji, że ktoś używa ```git pull``` żeby pobrać aktualną wersję z repo i nie może uruchomić serwera bo są jakieś błędy. Zawsze przed git-commit-push w konsoli na być ładny napis "Compiled successfully!".
- Najlepiej też usuwać jakieś pomniejsze błędy typu "nieużyta zmienna" - one będą się pokazywać w konsoli po uruchomieniu serwera.

##### W sprawie samego git'a
To jak używacie poleceń to też wygodnie sobie ich używać w terminalu w Visual Studio Code. Ale ja się zastanawiam jeszcze nad pobraniem czegoś takiego jak "GitHub Desktop" do graficzego zarządzania repozytorium.

 


## Dodatkowo: Opis struktury plików i katalogów (tych istotnych)
Zalecam zapoznanie sie z tym dopiero po obejrzeniu poradnika
```
📂sparly
|-📂node_modules
|-📂public
|-📂src
| |-📂components
| |-📂images
| |-📂pages
| |-📂roboczy
| |-📜App.js
| |-📜axios.js
| |-📜firebase.js
| |-📜index.css
| |-📜index.js
|
|-📜tawilwind.config
```
- node_modules - ogromna ilość modułów do użycia w pojekcie, które się importuje np: ```import ReactDOM from 'react-dom'``` oznacza, że ładujemu do projektu moduł o nazwie 'react-dom' i używamy go pod nazwą ReactDOM
- public - rzeczy w tym folderze lądują po prostu do folderu produkcyjengo bez żadnej interpretacji ze strony reacta czy webpacka. Tam najważniejszy plik to index.html a w nim div o id="root" w któym będzie się generowała cała aplikacja za pomocą javascriptu.
- tailwind.config - tam się ustawia dodatkowe rzeczy związane z TailwindCSS
- src - w tym folderze są pliki na których będzimy pracować
- components - folder do tworzonych komponentów
- images - folder do grafik 
- pages - folder do komponentów, ale jako tych głównych widoków na stronie
- roboczy - folder do komponentów-śmieci albo do testów
- App.js - główny komponent aplikacji
- axios.js - instancja do axiosa
- firebase.js - konfiguracja do połączenia z firebase
- index.css - globalny plik CSS
- index.js - w tym pliku chwytamy za element div o id="root" w pliku index.html i renderujemy w główny komponent App.js. Tam jest jeszcze coś takiego jak React.StrictMode To odpowiada za generowanie jakiś dodatkowych ostrzeżeń/podpowiedzi przy tworzeniu aplikacji - większość to usuwa od razu, my to sobie zostawimy.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
