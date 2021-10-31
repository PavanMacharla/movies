import "./App.css";
import { useState } from "react";

function App() {
  const names = "Pavan";
  // const movies = [
  //   // {
  //   //   name: "Interstellar",
  //   //   poster:
  //   //     "https://64.media.tumblr.com/173d67854dba14fd24a337d97253532e/tumblr_nmt47bTRM31s6v8mvo6_1280.jpg",
  //   //   rating: 8.6,
  //   //   summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
  //   // },
  //   {
  //     name: "Inception",
  //     poster:
  //       "data:image/jpeg;base64,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",
  //     rating: 8.6,
  //     summary: `Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.`,
  //   },
  //   {
  //     name: "The Prestige",
  //     poster:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzF4UmAcw-MVpBxhfjp-RSaOdj4fr_Wmtfg&usqp=CAU",
  //     rating: 8.5,
  //     summary: `Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences`,
  //   },
  //   {
  //     name: "Tenet",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
  //     rating: 8.6,
  //     summary: `When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.`,
  //   },

  //   {
  //     name: "Interstellar",
  //     poster:
  //       "https://64.media.tumblr.com/173d67854dba14fd24a337d97253532e/tumblr_nmt47bTRM31s6v8mvo6_1280.jpg",
  //     rating: 8.6,
  //     summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
  //   },
  // ];

  // const name  "Cool guy";

  return (
    // <div className="App">
    //   {/* <h1>Hi,{name} </h1> */}

    //   {/* <Msg
    //     name={"Havilah"}
    //     pic={
    //       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    //     }
    //   />
    //   <Msg
    //     name={"Pavan"}
    //     pic={
    //       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    //     } */}
    //   {/* /> */}
    //   {/* <Counter /> */}
    //   {/* <Movie name={name} poster={poster} rating={rating} summary={summary} /> */}
    //   {/* <Counter1 /> */}
    // <div className="movie-list">
    //   {movies.map((mv) => (
    //     <Movie
    //       name={mv.name}
    //       poster={mv.poster}
    //       rating={mv.rating}
    //       summary={mv.summary}
    //     />

    //   ))}
    // </div>
    <MovieList />
    // <ColorBox/>
  );
}

function MovieList() {
  const INITIAL_MOVIES = [
    // {
    //   name: "Interstellar",
    //   poster:
    //     "https://64.media.tumblr.com/173d67854dba14fd24a337d97253532e/tumblr_nmt47bTRM31s6v8mvo6_1280.jpg",
    //   rating: 8.6,
    //   summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
    // },
    {
      name: "Inception",
      poster:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQXFxYYGhkZGRcZGCAcIhwZHyEcHyAfHSIfHyokHRwnHyEcIzQlJysuMTExHCE2OzYwOiowMS4BCwsLDw4PHRERHTAnIicwMDAwMDowMDAwMDAwODAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABDEAABAwIDBAgDBwIEBgIDAAABAgMRACEEEjEFQVFhBhMicYGRobEywfAHFCNCUtHhYnIVM4LxJHOSorLCU9IWNEP/xAAbAQADAQEBAQEAAAAAAAAAAAABAgMABAUHBv/EACwRAAICAgEDAwQCAgMBAAAAAAABAhEDIRIEMUEiMlEFE2GRcYEjQjSx0RT/2gAMAwEAAhEDEQA/AOUsO5REHWaHfUSSeM04weESUJJSm5NzM6kfKljhGbS06cp0FVlFqKIQacnQMgGdKKq0K2vhetxS1YEpbcTlYTkQA3ZYBMBMEkonKQq3xWvEjGYZKMPmwyvwnGVOy0O0hM9akqzS71pKSAoJCMuUGDNTjJHRLDO9p6/DKyhs1IoUx2tjGnXUKw7HUhKEJ6v4wVpJkmSc8iJJ1vamT+0MNnxKl4UgOf8A64CEoDY6t5IkCxOdbaiB+iZkAFrRPhJrl4X6K+0LjnFCEHjVk2k+y63hww0pC0NpDp6tAzLypBUFJOZUkKPbiJtrW+18VhwGiMMpOVl1Cz1aUguKZDaDZRz5XszmdUK7cR2RQk12GhhyNOSTr5rX7KwUVGsXq3YPauDK8KfuqylpCkvQ02rOosoQlUWCodC1QuTeZvkSNiXGyy4lDCg6XVrCiwk5kEoKBOaWsoChkSFJOa+ghXJDxxTatJv+isV6RVwRtHDdc647hIQoNJQkMoAgD8REBSQhSzo6JUmLC9A4xbasIyyjDKS+gyt3IO0MzpsR2jZTY7U/BbLBzDkhvtZO3F/orhFZFWlGNwqGsOlzDLzocaU7+GkZkpUsudsqzOdYkoGRQATksbmQVP58SMQjDw1nSerCEqTlEAiAkIMwdwufGtaAsU7qnf8AAjrKtpxLBRiArBq6xxbpZUlASG0qCQgQOEHTSZvNB9K1NPONnDsqbSG0pKC0lHbEyRlJzTxN7VuS+RnhyL/V/or9bqA3VcMZtPADEpcVg1lkIWnq8qWsxUsxIBUPw2lGFC6lJSSBc0PgcdhSwy392U4428lbjuRPbaC1lSTBmSjIIUSmxsPiJtVYn258uNO/jyVcN14pNWHHrZGKQ8GFIwwU0VMlI+FOXOiZhcwbkgmbxRmB2rgesdJwZWhYa6tAAJaytrCoM9uVlF1XUJJhQFa1VmeOcZcWnfxWyqIGvca3QPb5VZtmY/BtqAewy46lCDCEElwE51BKzl7QgZ7lMWF7DYbFslhlKMOS+hSCtwpSpKgFYgkEHilbIvrki0CSmgOEr41v48laFemmG230rxDy0I6tClqKG8oTlRPZECwITHjQChQA9Oma1lZWVjFjw/R9xaUqBRChmEqIMa/p1pUtAkE8RTpjbRSlKOrSQlGTQXtEm3jSZYVmFrSKpPsRwt81fyPdrj8I96fcUWUgiCJBsRQu1f8ALPePepMc4Utkp1BH/kK8rbikvln0SUowzZJS7KCb/j1AKMJ1byYHZJsfDTvojaTOZTaeJPlaiWXAsA/QNRvqhbfPMPQU7yTclfdJnLDo8Eenlxdwm01+E2rRjzqWkgAcgkb/AK41A3thBSSsFPLWeQqbGtHMlQ/KFAxfWP29aWK2epwCBEcRE1THihKHKT3/ACcXXdZ1mDqfs4YehJVq09E+wVgqcKRlBywOGtEYrHqQspDRVEXG+QDwqHYTGUrEfp+dS4vaCkLKQ2VARcE8O6knH/I1V/2dPS5a6CEnLjbe0r8vVUBY/aBWAktlPaBk8vCmuNxGRBXExFpjUxSfaOKU5klspAVqZ3xyFOsXkynPGW0z6UJpLja/ruN0mSU3manbpU2q8Puq8EOAxiXkq7MRYg3F/ehFbSSyS2EkhJMGdxM/OpDtJltMIg74A1PM1X3nytRUdSZp4Y+TdrRy9b9QeGEOM1LItNpJqvgtjz+VBVGgmKAw+1g4tCQki5OvI/vRGO/yVf20j2Go9cjx9jS44Jwk34s6Ov6vLHqMWJPUuN6XyONrYbrFNJ3SonuEVLjMUhlIt3JHv/NSYhwBaJ35vOx+VCbbwZXlVBMAggUsPU4xl2L9V/hjmzYlc7S7W0qXgkwG1EunLlymNDcEVqzggh6U2CgbcCCPTShtk4GHAqCAJ17opmtX4iRwBJ8Tb2NNkShJxj2oh0c5dRgjl6hepSVOqb2jzHYQODmJg8P4oTYLRSlQIggwR4miHcSUuJTuUPI3okAa8aTlKMKfZ9jsjhw5er+7B1KOmvlPsysbXH4y/H2oNwe9HbTH46u/5UG7p5H0Fd8Paj8V1f8AyZ/y/wDshrKyayiQOpbRwOGTh3crOGzpZsoRmCoIkdn4pg1QHVCRyPHhRBagkQLGJFDYpoAyRc/KqcaRzxn6kMXtohxMBJFxqfGt8bi8yCnLEkXngQflQGAZB7QB4UaU2uJ8vnSx6aFL8bO7N9Z6luSbW1xel2IsC8Uqm5B1E1Li8TmI7JGWTr3V62i9kx5fI1swxmWBxMVR4YOSl5OWH1LPDC8Cfpfj/wAYcsqSYImSQDppH7+leYNSnU5kZUiYlZvpOg18xRX3TOjKqyszkbuzKbA8R7VFsHZRCAsqVdSoG7swCe+Z9KnLpsbldHXD671kcXDl+Lrf7IMa2rDxmlQIzA8ZKgfUbqE/xcfoPmKsnSPAleHRAOYAkc5JsPFKR/qNVB7CqQe0kjvtQn08JO2jdN9a6rDjUIvW3tJvfckxm0QtMBJFwdRuNbY/G5wW8hBkbxuNCAe596mQqXATvUD60F08FX4Hn9Y6mXK2vUqel2FfUmdK8SyaZYdjMqPrfWqWde+qcDzfuhmKxoLZSREiLnXutQmAbSlYWBMT7EUc9hEnWLGo1NZBIE8hQjhjFNLszpz/AFLPlnHJJ7jVa+OwLtbG5ykAEFJO/u0onD7YIQC4CbkSOUVDjAErIg6D2FEYXDhbZNpBtm0n/YUv/wA0XHiWX1jqY5XmT26v4f8ARj23BohJn+rund/FB4PH5VqcUSonW2/6FMWsEm+bq4gR2hPPSBUO0UtpEJAnlHd7+1FdLCMWDJ9a6jLkjJvcXa+LNWcUHcQ1qNBHHU/OvWNohtJSQVQSBHAZf3+rUqKyVZYABIGk628ajywkEHed/wDaaR44uPGtIaHXdRHO86lUn3+Gb4zEZ3CsWk2moHVzpWEX8ajNFKlRGcnkm5y7vf7PKysrKwpYSJM240DiCon4bCbzTVLQnQgXGvfzqJxxIVdvOIBglQjX9Khy8q6JLRxQfqI9lJMwRGp9qYO4YmIjXeYqbDqQ4ZQ2GxHwhSlDhqtRO7jRKkAECDFzYxpHMU8exGbuQMxgyInhGs8K9wuFlxNvzjyn9qPw7N4g6A6z863wDYDidT2ha+8gelHwJ5INsYwpbLiReCIIm+YJJ+fdWdGVqLfXJUCAogtgfCYiSSN+sfvRO2cGUJWBcFld+Sswnu4nhXnR5tbOGcJTKOtNiCg5ilANiNLCDfwpH3KxriOnAHMOkwQQCCLE6z3a5T5VUukzX4iQDPZJPfVrw7k4frEpsUE5bGFJsRflBvuIqsdJ8X+IhRSBIggEKgaWI30AruIkt2Hefc0UnDQ+E7guP+6KIw+BJCNwMmmOE2dOIRmNypJNv6hQGsTYFshZjUVjOG176eYHBAvlMWKkjzNLMY/1IVAlRUYnSw3+dEG2wd7EOZ1AKEBSh8Cf1Eb014jEuyDmE2v1aP6f6edW7D9HGXVZkpWUlKVqOaJUsZ4TruUNw1jdUT2xcOh7qzmsASc4gEXIkJMxCeBuRFKhm0UzFqUpUqMmBuA3cAAK2TPVDKCSFnTuFOekeyWm+rW0pSkuZvijVARMWBjtRcbqm6JYaS7eCAnx+K1OloSUqErWc3UCBE37+Xn3TSx9ZqybecyiEk3IOv1unXdFVzESbmY5RSTHx72DNHtp7xunfw31MWSc4UQlQKpSRl+EEkRu0iOdDobJMC99NPWjcSsB1y6l5lOELUIWTCx2p0kmSOVSR1sCxSIURHD2qJKJoraKe2dZtPMwJPdULQ1nduNZ9zJ6IYrK9rKAxanGVoUttScq0lSVAxYgwRIkG9LnmEJMFRm062ppi9pIU684VCVKcVBMmVEnzpO86FKJnW9Xb0cUU7fwWPYOECU5kkkKHPdPGmjoRbMJN4gE8J003Uq2I2HWsqVrSUwJCiIPdMEUe1gHUm61LtY2Macb1RdiEu4fg0pN0zG+Qrgf1VNgsOStNri+nCI9azZzCoOYb7THDlU+CYu3rYqMkf0msxQPaailoJITZAHavOYqlJHClGJbcOHTlzghRKTnzJWIQSVKEBSgBqQLVYekGVTeaACSxMmQklfrrN91A4lxsYVsD8ji5AGWZBAUBmkCYOu/jSFV2GuwmoYWg3lvrE98QseIg/6arpYAUFRcWE+/pV4wmGCEBRukJnQndlUIFyDVW2x1Zc/C+EBImCO1lTmMH+qeHdSxdsaUaQpwy1fhd1HodIxIgCyhFv6u+oMM3Iat+QaeFE4Zr8dHen3FFmXcFbxCg6siJsR4HvqDFbML3wlEhV1QdI3W48aYYdr8e+mZM+dTbHa7Sx/afWswLuWfAMhtKgATCWYSmP8A42k7yABY0LtzZSnltFOXsTMmJvbceJ86B2jiX/vHVpfUhKW2yBnIAlImABzqDGY/EBcHEOHKgrnPae0PLnSpMaTRK70eyMfihKiHSRvstN90ap3VrhUhAWgJHaRmKYgQkjU24m1D7dW8plJcfUsFSbZ5GhNxx/mhdkIVBGWZSq+YiQUnUzu1tuFU8E3VlZ23iApZyzBJMcZt/FK3jBIggcDeO/0qxbY2dLiktlJIhQCROaxJg6EgSY3yaUYzADsBJzZxIVoCb2iNRpFJIrjaFCV8NRoec1O8mVrSoEKKiZVEggKkGLfFr3aVFiGSmLyOF7d/r5GoiszOs8d/1NSOtb2ibGyFmQUyAYI0t699QEkkzcm9H7TcK8iiACEJSQOAkXnfMzQbSDcjVInwkA+9Z9zJ6IprK1msoDDF1gya2Wm/db1NHvYYyfE+FDuJE25eomrONHJGfIsHRBHYWf6/kP3pviMQUqgECwOk3v8AtS/om3+Eeaj7CnKsIlRnMQYA3fW+qrscs36mTYBZKSSd53cqKUsoQSf0OaDSEKJJvfSPGvMO0lKSLkQSZjlRDLaTZKSOyoQUxMgiPWgzIUbVUUtJUSFXaVMWUnPAOvzFTYjCtuYZgkrKUKelcgn4ykSSTuE+2te7WYgJbnKn8OBAsEpSoDUCSqwki6tanVhwhtkZrLS4VEb1FwxMEjMJjfob6EBjIsCkRh1cMo8DIBqiO4lPWOJ3ySOdq6VhmkrRkIzIULgjeIqpdOcEG3U9W2mOrWVEBIIkQPY1KL3RecdWKsIiFNToAme4RUuGb/HT3p9xRTOFl1CdJCR5wKnwOFJeTAP5fcU7ES2LEsEuqHh61mEWG3FlZhIT2j4++6neCwUPLJSJ1vffQXSTAqcC0tpUScpgEDjMzqnlS2Gq2L2ekjSn5SySSEJBLkZgkJEQEmDI4micZiklZJaIJSMwDv5ZFv8AL+Ke+odgdHEBxYdElJbyqBIjMlZIsYmctWYbBaMypUkZSc24EH3Ao6BTZXdt4jO2hIaKACNVEk2PFA3VLsnDdhTSv/6AzBgxlzQJvMgbtx402VhWXUGC4sIvBSoRu3gGKqWLxQL1k5gCQgzNhPpHlW7qhZadiTE4dbS1BbYUkAjIVaKVIBHFQM6e1LNqKRIKAU2EpVeF/mjkTfxpni8Yc6lPAqWoG5JF7QTGtKcUnWIIEAbiZm8fW6jLsNj7gmKVooEHdIsYEajgZ9OVbu4QIUtClSQNAQJ7OaZuCkWtqd0G1CLOulOcNjUNOYjqkpUkpWlpZJStAUvKlQJBM5TcbwTeonX2QlddzHMdTJUeJJ9BUmGxZQSRvSUKHFJsajeQRqIOkX1Frzv31rlMTGm+sPSZpWV5WUAlr+6OKKu0iEBfbzQlWWxyHRZO4DWoxhFxIywpKeOkRe2tqNceHUISLAJWQOZW5pPcPKt0gBKb/l0trFdKV7POcq7DDo20pLcEXmfAwR6GjHlArOm4drXdSzBs5wLkXOhI4fXhUkELKe1yM29TTkpbZYtnAZLf1RA0vuo5pakHNOiSYNgdNYpCxhDlBkg944xUz7bjcFK5MEkHgI3xb6tag0ZMm6T7TyKGUELvukfDB79RUGKxK1BtKhlEheWIyklVhN8t987qmZxAeVJRcSFZhpa3hW6WS84gEBIDglYIMp3ABN/PjQ7B2y5YZ/IgKAJByiBcgkgfPypDt59DwdWoEHqwkBQgic3DTWm20kBtKREgqRYgi6TmGo4ikW0WIzIGnZSBly2z5dD9HXfUoo6JN1QShDYfCgQMoEd9FYVaOvTBH5fcUNhmPxpOgIrMG1+MnvT7iszRJwn8ZXdWPMw+sDgoeU1JhG5dI4ZqmWweuHcaAWQqaS2lSjvUiTYWBOskDS3jWL2q0UqSDBIIBCm7GDf492tS7TQQwuZPw6SDruykH1r1rBYdQT1qEEkJVCgowpYkRrG8a/lrBog2++01h2yAlThb7RJHxKSDJ3EC9gd4md/L8Y52s0ECfXfXSumDwcbbabbzISJEC9wJIk3ggGYJMm438+2zgS0QAEmJJGaSb8jc8QKeHYlk9wC242oq6yTmBi4kK3akQJ39/GyXGZkFSYFiZAMx4i3rTXHIbDWZJVmK7py9lIiRCie0dRBuIOutJmsOpw5UyqcxgawkFRtyANuVLNlMUfIMR2SrnHn66Vs4yU28NZF4IggwdZipX1BRQNOylJypFyLTCQJOUjWSSLk0dgtmhTrbbiiGj8CoKt5JJSLxZUpBB576RKzobSFeLUgxkzaCc0TmgTpuzTHKKjDxy5dx+vlTLHbFcQopXCVQlUQRAVoDNwbGx4HfNLHEkWOomfSg0xouL0iOsponZrZvnPpWUaYv3IjhoKDbsnRITadMwkHxvHGtmJjX6+gaFGOlCk6zy5lRnvNSNrOmv1/NWTOOSD28StCrbtRu+tKLZfKzGW8zMUJh8KogaX9hP7e1HssFEryg5RMTqPHj501k2hts5xRGUpkchv7yY86PxLOkgJ1ER3eB8q92ZhM6EqARNwATexKaZfd1gEFAMRoZjwMDSaDkFREmFSAYIk3iVFI10t9Xpjgg2VgpGWVJBEkwZSJk75k0HKSZTmIuIg6gwB36aceVbDCr6srsLhUFQBi+43m80Gw1Ra1vNuIPWkApPYlRMkTaJm4mI/3XP4UqhRHxKTw/Xm3UnwT6kqvO+3dVj2fiL6WtSPRRS5GyMDKjXuG2eetBj9PuKdYdu5gCqvtXpZiG/wARrAOrbJVldkFKgkxIAIIm5vqLiaRyOiMBm1gcryjxBol3DS6Fd/rQXQ3pCjGhSgnq3UWcbMyk3giQDB5irA60AQbeNCzcCo9KsYhtvqyTKoNgLAcZBHpUuCcP4RSFEEYW4C4iFA/C0REWN445a8xmwFPvAKSR2VFak5FdoKG4g5RG7W3fQGBw7DTq2ZhSHGlErQklRBJtlaVAE62iT8Opoqoj6rvwTbRw7yw2kDKlaISpwlAsBrKQQSI7JA32qjYvAl9zq2ZU4oqytxAIFxlKoN4OoHw866KXHEfdUgNlnKQCoBMCFZoT1YuEiQIEkAQNaG25s3CuYppKV4lD9ih5JBSlWZRGYKuLk2ETI4mtF0CUL2cqWHUJSCEoQ4gEFQlKxqCSZ7STa1xBB30pGDJTmyGwKpMQUSBYb4J3c+BrrDAxLC14d8srYddWq6csLzgOFIFhClB3LHwrKk6EVTtr7NaD628vZTiH0lIkGylZUkiZCTEGJhRre4b2Ip7uFW3kcKbEkAjSRcjdeCKa7DdAfacX2Et5SScyhZOaYN9MoHgaYbd2Y8ywUusqQ0VDq3XLKzb+wJVlN9ePhQuHgu4cjLlPUhRUQlMoDYUSTAuSQSf00tK9DuTcdhvSNKs2dZlaw2pXBNlDKN8DLvvJJ31U8V8UwDEWO/vq7dMi2p2ULSvsN3TcD4/hi0QQdT8WtVMNIU4lJnU5t0gAmBzMQO+jJaExOpMVRWU4yt/oHpWUOP5K/d/DC8IABljfNFYJvtG0gyBykit28PfzphsTCkuQbkgQZ0q1HG5BLSQlaUmRmIAO4aXPIEzRnSDBpbaU5h8Q7iIUlK0EJjKrSAlIVJJTHfRO1MNkU2RqmSDzkVLgNtqfxBw4QtxRJJgAxNgpRJypAO9R3WE1KbaaaOrBCDTUg3YmLSVhoJXMnWIFyo86M2u6W8ShYzDLkJKTcpMdnXkbc606P4FScScySCCuZG+4o3bTUuqH/LHoa2rJ8XQm6UqL6Qph7qXMw1CfhMhXZToq4MqJmwBFbbCwz5YzPwFpUU2sVZF5Qop1gi43HUUr284nrW0gEqTClXtBMARvVJHgDQO0emWIZX1eZJCSRcTNhIJnQRaIoJOysuLj+S2dehIIbzZpJzGJvr4cqabPaSMoGVRMWBNjwvx+VJujeNTikNuIQkLkhSACQCOR1Btr/FXDZrmIgGDAngAeUTuotkox2E4fEgajkaqPSkvMJSx95SBCEtp6kaJEKzEm5PZgiN9WpDq1rGdGVadw33BFhrvrn32t9LG0PKYQuFthKnLAypQskSJzBME7u1papNWdeOVFl6BbGDbzz8klxttKzoMwKjI4GLnvFOdpuBMm87gQfQxEVyj7N+nDrLquuKltOwCgH4I0WmdVG86SI4CunPvsuQ4HJbI3jfY84tu1o8JRSsWU4ybSCNnMuZyqwREFQ/NMEASKEVsRouLcW6lJKkmEoSTbiVJkE+OlqO2U9KI7WUGASNY3j2+rJOm2OcS0200rK5iHgyFZsuVJJKjMGDAAmDBUKKA1qibE7IaV1QS6fwbXRqAoncQEnTTgCan6pBxDSkl45Tc5xl1PxSJUBIvNVDC4ttjFtpQGmkOJeQpKVqUFlAQpK1ZkplYVnTm1Vm7qaKQ1K1rWgCDnUFmAmAJIkjTlRTsWUeLoqnSzbScdinepZUWmjlcc7IEiEZyDqeESctBbCzIxLTqpMOJWSZMqkGT6TviidnqT1y28OtKWVOKUc8SoKlIymN5ITHDLrBpi5su97RAM8KpF+GRmkmpIF6VYp99wt4tTZ/DEobSQEFQm0m5FjPdVcZwTKTC21KFktpC8qdfzmCct91Wh/ZjLqm3V4iQpLmZGhUGzcgxOUyZPIxyo+P6UKcfcXlT1ZIyoiMqEgJTEadkClSruUm3PcS3/AODspbU4+QohIhDKMgSBuCl3Ub6nhyqsbZwzHYUykpJBUe1mINolWY31/KI5002fiWn2VNpADjRk8wojQ74MjSlj2DIUO+mUSDk0/gs3VN//ABo8k/vWUpg8PUftWVuDJ/cQUjCwCYvfQ/xfzplsHA9orJKYjISiZF9RntaOOtetYJaCnOnKLyVFIGh50+ZxbcJS0QowAYQpfqLVRsEYkO08N2FOKUFFI7ICCkknQDtxJJFa4HEp2cyGGYLxBLrmsuWmJ1SiQkbrkag0v6XbUWy60kkEAdbkygSuSGzIvlCgZH7UqdxRW5OphWu/4SfE3NSZ149HQNgY116SSlTiSM2aZII7JsLgjf3jdRzuy1LUVKIkkaE7hG9NK+hvaazAWgJHEQTKT3GfPnVhzBIKlGAASSdwFyfKkQ0u5yjpCer2niGkqFkNLJmSmEjsjT9QM7qpu0XCtxcXOdXhefnUu09rF7FYh/tKQ4tRKUnLmSScqCRfLAgxc6b5r151b7q1ISEpUokJgCCq8QLASbeFNFM0qRfPsgT1jjzFwAkLlMkAzl13TNgeB5107DYDEJEdcn/pJ7p7Ud9qqv2LuFOFW2UBJQ5c2BVPHeY58avoNLJ7HhFUQP4aELUpZBspSgI7KbwOFpr5yWlW09plAv8AeHgZ4Npm459WK7p9pG0yxs3EuAwerKE96+z864T0F2qcK45iQmXEoLbQOnWKskniE5SSOFZK0F62WDpNsJGFW4GDLbWVsqJv1sEqA4gWB4EKG6wfRjbzzGJadSs/GlK0zZTZIBBHd6waj6R4/wD4ZDSVE26xc73CJUo8SVKUaVNrsFDkbfKrLemcml6kfQO2tpNtupZObNAKQlJVMk7k92lck+1HaKnsQlKXSENqIAT2SFTmKjvkHhwFdf2gxh3W+vWhJhGcLNjlgq14VwF97Mt5w3IWFCeZNc6e0juUbTf6CdoLdaxDL6pWRCQVEmVQlSiYuLqiZEwTVj6T7S67CBaUqSFLSDBMCy7ERfTfwmkO08apbQJbAKEXPExlCv8ApSnxBO+nuFwaX9hlwXWw8pSuYG49wXPhVK4tIk/VGyppd+IeHoPnV4b2ytWDYxDg7apSrdmKesbzeJE+NUFZ7R8PWKs+Lxh/wbAJMXexAHMBaz46069yIyXoYrxe0+qZuJLjSmkyPhDjhW4RxOUqTPPlVTxnV5hlkSbjWBRO18bm6tP6Asf6lLUfLLlpVSTlsrihSsd9DMXkxKQbhwFCvGCP+4CrjjGAVSN371QMMpxhxt2CFIUhxMgidFpPcda+gdvbRbcZSVN5UFTa83Vz2ZBMXgyLc5oRlWhM2NS9ViNjokpSUq6xvtAH82+/6K9qz/8A5AzuaRG627yr2lvIbji+RCxsxlNwhM8Yk+s0zYgDgB6Umc2ilO8Um6R9LeqLbagnI4HQu0yMsBI71EXjSavJaIY3bpFY6WbQOIxL+IbOZtoJuNCjOhCY7yZ86M2KFKUVovCYERcqKRFxrE+JHijxcHrRmATCApB1WRERxjtExp4yCdnbQHYaBCQkwlIsJO/vPHuHClOk6x0NMMqAOqySbcAL+RHgak6ZNrVgsQlAUpSkEZUXJBICgLGezNL+gD2ZgtauIUZG8pJJBjvmrGoQYkeBmKRI0ns+dXmFM/huJKHATmSoEEExYg6WjzqXD4ktqCgJG8cR+9OPtXajaD39QbUP+hI9waC2jsRbDWHcUZS+0HEnhe6eZAKTP9XKqJ+BZL/Y7P8AZ/gH2UqLqGghaEFC0Kkq3jMMo3HWrahc1Uvs+2l12BYVMlKerV3o7I/7YPjVoZNRktlIPRSft6xiU7NDZMKceQAOISCT4C3mK4zs1JOTgCtXiRHsPerP9tPSQYrF9Wgy2xKBzVPbV5gDuSKruyEkJEiInWngtgyS9NolxgJGp0jwrXA3aBt2TlN4NvC9udSYg1rhhDCdPiUfGSPaqeSP+p3Do0o4nZTKc3aWx1ebmmUXjmm/jXL8Z0TfCXlobgIWA4haglQWnKshAPxpCVAyDBzCJmusdDcN1WAwyIg9UhRHNYzn1Ua559tXWfeG4UQhbIBAMSUrX8Ua2UnXnUVG5aOlZOMKZVsXiMzaxxR+9XX7NsOX8JtPBtkBRPYk2/ESRfWBKYmK5UHFKOQqkfLhXZugWI63GoxTYQlGIwaUuoSCPxmVBsmAISmAIuLEU090zRaSaOd9IwnrVJba6oNJyLSSfibKgo77247qbdP9mnC4fZuGUoFbaHXFEaS6sriDwgjwo3pNgw/tN5pMHO8lBAH6oCvnPcaC+2bG59pFAP8AloSO6Ug/+xoruSZz99Vza81HkqVtwCTEk6UTgmErUA45kKgYUdAZAE8Em9xpreIpXsstaHWzsKraeOS2kKS1YRr1bDYCQJ0BgAcMyuddT23hQhlQSIAAAANoBG7kBSr7Iejpw+HViHPjfCSkAzDQkpPeomY4BO+RVoxZFGJDK/BRhtNNZVnyJ4elZVDkorbKDvofpFgmlMqWtAKxlCVG5HaBtw36a0Qyqt9r7JdeYJkIazoBcNoKjkET8UKULCqT7Gxp8kAJ6ONO7PU8U5nurccSsKUL9op7MxdMC431RGrm+/3FdqwuEabQlltSlIQgNyoASAMuk8ONcacZKFrQdUKjxHZPqKi0dUXdnWfsubCMF2TdTiyszdRm0nfaKtQVVN+zLGBWGWmfhcJjhKU/MGrKt+hQG9nMvtlZ/wCKbc/W0B4pUr5FNONpbPL+w2VC62EBY/tQVJX/ANkn/SKC+2IpKcNcZpd37jk+cVZfs5zDZzCV3kOWP6StcA8o9KI96TAfsVx4Uy+3PwrSv/qEH1SPMU7+0rpU/g2WPu8F55zKkFOclIF8qd6sxR586oHRPFDZ+1ncOTDS1lq+4Ey2T5pE/wBRq6bf2GvGbQwxdbC8Iy05nJI7TiswyxM7kGY3GklvY6VaOXdOG3S+XnWsgeJKFEFJUBqSDqTmSSe6+tbYSAPL2rpX2vdHDiWkvhwJ+7ocUU5Zzg5SIvbRXpXLNmOwpYPh4fwT5UYaBl9SJcWuATUzqCoNtIFwgJ/1HX1oTHkQJFpE9039Kv8A0E2G2rElamFZUpJuSEhU27MwTrRcqYkYXGzqCQEpSn9IA8hFcz+2X48Mf6Xh6t/vXRnHq5l9sL4KmRMAIcPcSUj5UIe42Taoh2t0VSrZOHeQmHmW+tPFTayVrB/tzZhwgjfTH7FdqQH2JtKHUjmewr2RVifIQjL+UJi/6QI9q5t9lyz1zqgYUGwB/qUP/rTrtQL8/A26FvF7bJc3Z33T3EKA9VCvftiClvLyo+BAcJgTlPYKtJKQogcZNJ9n4DGYVwOt5ut7WZQCVJUkm4IJSSCYOmopjtrpOp9h1GIaT1vVLSFhJSRO4SZiQLSaXi+43OK0c4Yie1pU6ZecSlIgqKUJHMmBPiaiwjeZYHGmnRpgHHYdO7rmyd1kqBMc4FKros6s75gsN1LDTIg9U2hvvypCbeVL8c74VLicej8ilR/UACPI377UvfxYNUjE4pysH608ayo+zz86yqEADZeNYQMxQXHNwVAQO+FSv0FFPbQU8QXFTEEDQCCCMoFhcDyqusUxw6wKdpdxk32H7DwrnHTnBFGMUtEBLkG4/Mq577gnzq7JxMVRumuJ6zFISLwAnxm/vE99RmtF8L2Ofs+xWVxY/Um+6cpEW3WJtzq04/EuZD1akhW4qBUPIEe9UXok7D/fm9quiHJjX3rRWgZPcVTbnRrGPudatbajAAgZYHAAz776c7H2m7h2kMup+BISDeCByimfX8/rlWjigoQYPf601IHJsru2MG4/iW8QG21ZSmblJOUgjy9rbhV82XtsEQvsqGoNV53CxdJvUJxJFlDlPClcUxlNotXSF4KwuJG4su6f2GuDTKld4IrqTG0VAFJEpNiOINiPKuY43DFl5bat0ieI1B8RFJKPErjlyInb19BbOfAZbAgSgKIB3kBR8yTXz05XasJtILZbcFs6EqjT4gDA7vlWSthm6RYVYiud/a83KGnP70HvOVQ9lVaEYubDutVd+0RJXhbAqKVpVAF9CDpuvN6PGialbQz2njCMK4sGfwFKSePYJFVL7LBfEdzQ/wDOicNtBCsD1Q+PqS3EXzZYjz+VV7ovtX7q4ouIUErSAeyQQRofei9Uwx2pJHTHXJ1NLdo7MS4CLEn+ajw+PStOZKgQbj5d261YcRz8fWqpHM2cuwLmVxJPGPlTXYLwGNQoCYUo+OU+1A7cw/VvuJ3Zsw7jce8UPhnyhaVp1SQoeBmudOtfk72uSteUdUVtmdQaxOOnWhHFpWnMNCARbcRQiu/SuukecN/vIrKSSedZWBxCGvq9YqePrWZhFbJI30LGoV43arqCQhpSo0UYj96rLjjhczrjMNxPymro+lBAEUAdktH8ifIVOcb8l8eRR8APRXFoDiipcEfDukmQZ8KuTeIBEgjwqujZadQNPD/avUtqSbKjvrRVIWb5Oyx9YP4rZpevdBnjy41Xk4xY1PH69qJa2nxnv+t1EWh+Xeem/wDbhULygd3nQAxoN5iPO9bdaO+9zWGNyxFwT+1VXprhoU25GvZJ56jx+Lyq3MOWvbv+rVmO2Sl9h9vReVBQf605iO4GI00J1pMjqOx8S9SOWTaum7AxQ+7M8m0D0j+a5eFWq99GMUFsIASoZOwZ0J4jl7HjS43spmXpLK2+cwPO/wDFerWCBewvxty5UEl7w7hw36e1TNrnQbvOrUctg2K2ehV4+V6BewZTaZExCh4+NqcOJnUTz4a0O6Lcu7j+1EwjX2TaQeWlZ96WnmOP70wxWHB56DTu+vCgX8DGlGzCDpT2ihcXjKfcfP0pM6Rbup3t5shF9DEUlS4ALC/Hh/Nc0/cdmL2Iu2ynfwW7/kT7RU7ulINmbQhtAtYR5UYjaX151dSVI5pQfJjDrFVlBf4gPo/xWUbBxDQ5UlooMu8KnaWBQsFGwEzwrdIPE+VetrG/TdUoIi3t+/1ahYaNFJNYpMjw4a/zXrio4CvFborGBHW71olGv1FEqj+feedTQLR3TyM29axkAgX8zU6Fd+4/XpW7rfz+ucxvqKbwO6YNqAQ/Du2jwNvLSmeCxYQy4pVgBJ5AAk0g6wiaTbV6TS0plAVKiQtShFjEgXNzxP8ANTyq40UxL1WVuIgGw3/vXQ2VJbKUJGUQIEWFhu77+tc5gmrWrpCHSkrTBygSb6Tf1pYP1FsquJZEEfX131K2qI9O76tVYRjhbK4R3UY3jhvPDSPoXros5HGh6Hbjj/trWji5pezjwdPrhU6cUI1jwogolUbT+9AbTYWtGULUjfIN6IKxvnlvrV1U20m5twtWezLRV8ZsVZPacUqNCb+5pc5gspMncY0F+e4Vdsg5HhYTUL+EQqyk/X17VN40Vjma7lSbWNEiRG4nWiEL/pNWFvAoSISPr9qidwY/TFbi0Z5E2JutPA1lMvuQrK1MPJEqR31O2NPahk/71MlQ0vPKiTN1rIqJGPMwJreR8jzrVDYmbeINEx4jGai/hXicZrNt37VJ1IPj6+W6tfu6Z04Tbde/H9udY2jbC4nNP+/hwrZeNymI/evcMwOcb7TwEnhr6br1IcKDEi/CfrfWMCjGivPvZN7fzUzuCG7y8dB51CrC6DdQCe/fLH58pozBYpBbgtpPaOoB4cqBXhTaxM/X7U82Zs8FlBi5J9yKnmaUSuJXLRXsDg0OPBMATm00HZVu8qH2xgchAEHXd3Ux2ejK+mP1ED1/ejdt4I5QojffyP7VNupode1sp4sd45VIHIj6+v4pm5hbaVH/AIeCdI+var0R5Jg6MWRvqcbTVxrRezFbqjOCIo7N6WGo2rJ3Tu4Vt/ifLvpecNymt0t8jWtitIYDas1I3jSdKWoQD/NEM23U1gaQyLkiCBHr41Et22+oQf4tWq+81mBEnXfVv2ryh83OspRqMR8zU24jn868rKwGeKcPZvUrVZWVjEqLk/2/tXuc2v8AV69rKJghn4e9PyFSo+JI5p9qysoGIX1XSK3Tonw9KysrGPF6+fyqx7K/yW+4/wDkaysrm6r2r+To6b3P+CtNK/4hH/M/9qcdIf8ALV/cj3Fe1lLk98f6Hh7JFcO7xrZvUf2j51lZXacZIUDPEbzUbH7+k1lZRAaFsGLcPlWKbHDfWVlBhREU2T3fOvQm/hWVlYxru8q0c0NZWUrCiKsrKylHP//Z",
      rating: 8.6,
      summary: `Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.`,
    },
    {
      name: "The Prestige",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzF4UmAcw-MVpBxhfjp-RSaOdj4fr_Wmtfg&usqp=CAU",
      rating: 8.5,
      summary: `Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences`,
    },
    {
      name: "Tenet",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
      rating: 8.6,
      summary: `When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.`,
    },

    {
      name: "Interstellar",
      poster:
        "https://64.media.tumblr.com/173d67854dba14fd24a337d97253532e/tumblr_nmt47bTRM31s6v8mvo6_1280.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
    },
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <section>
      <div className="add-movie-form">
        <input
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />

        <input
          value={poster}
          placeholder="Poster url"
          onChange={(event) => setPoster(event.target.value)}
        />

        <input
          value={rating}
          placeholder="rating"
          onChange={(event) => setRating(event.target.value)}
        />

        <input
          value={summary}
          placeholder="summary"
          onChange={(event) => setSummary(event.target.value)}
        />

        <button
          onClick={() => {
            console.log({ name, poster, rating, summary });

            const newMovie = { name, poster, rating, summary };
            setMovies([...movies, newMovie]);
            setName("");
            setPoster("");
            setRating("");
            setSummary("");
          }}
        >
          Add movie
        </button>
        {/* <button onClick={addMovie}>Add Movie</button> */}
      </div>

      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
          />
        ))}
      </div>
    </section>
  );
}

function Movie({ name, poster, rating, summary }) {
  const [show, setShow] = useState(false);
  const styles = { display: show ? "block" : "none" };

  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name} </h3>
        <p className="movie-rating">⭐{rating} </p>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "Show"} Description{" "}
      </button>
      <p style={styles}>{summary} </p>
      <Counter />
    </div>
  );
}
// function ColorBox() {
//   const [color, setColor]-useState("");
//   const style = { background: color, color: 'black' };
//   return (
//     <input
//       style={style}
//       onChange={(event) => setColor(event.target.value)}
//     />
//   );
// }
// function double(n) {
//   return [n, n * 2];
// }

// function Msg(props) {
//   return (
//     <div>
//       <img height="300" src={props.pic} alt={props.name} />
//       <h1 className="name">Hi,{props.name}</h1>
//     </div>
//   );
// }

// function Msg({ name, pic }) {
//   return (
//     <div>
//       <img height="300" src={pic} alt={name} />
//       <h1 className="name">Hello,{name}</h1>
//     </div>
//   );
// }

// function Movie() {
//   return (
//     <div>
//       {/* */}
//       <img
//         className="movie-poster"
//         src="https://64.media.tumblr.com/173d67854dba14fd24a337d97253532e/tumblr_nmt47bTRM31s6v8mvo6_1280.jpg"
//         alt="Interstellar"
//       />
//       <div
//         className="movie-specs
//     "
//       >
//         <h3>Interstellar</h3>
//         <p className="movie-rating">⭐8.6</p>
//       </div>
//       <p className="movie-container">
//         In Earth's future, a global crop blight and second Dust Bowl are slowly
//         rendering the planet uninhabitable. Professor Brand , a brilliant NASA
//         physicist, is working on plans to save mankind by transporting Earth's
//         population to a new home via a wormhole. But first,Brand must send
//         former NASA pilot Cooper and a team of researchers through the wormhole
//         and across the galaxy to find out which of three planets could be
//         mankind's new home.
//       </p>
//     </div>
//   );
// }
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>{like}👍</button>
      <button onClick={() => setDisLike(dislike - 1)}>{dislike}👎</button>
      {/* <p>{like}</p>
      <p>{dislike}</p> */}
    </div>
  );
}

// function Counter1() {
//   const [dislike, setdisLike] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setdisLike(dislike - 1)}>disLike👎</button>
//       <p>{dislike}</p>
//     </div>
//   );
// }
export default App;
