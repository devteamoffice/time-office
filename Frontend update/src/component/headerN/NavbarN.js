import React from "react";
import "./navbarN.css";

// import logo from '../../assets/Image/'

const NavbarN = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ maxWidth: "100%", padding: "0", backgroundColor: "white" }}
      >
        {/* // Header top */}
        <nav className="navbar navbar-expand-lg d-flex d-none d-lg-block ">
          <div className="container pe-0">
            <div class="col-md-3 header-top-left d-none d-lg-block">
              <div class="header-top-social">
                {/* <span class="social-text text-upper">Follow us on:</span> */}
                <ul class="mb-0 ps-0">
                  <li class="list-inline-item">
                    <a class="hdr-facebook" href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="hdr-twitter" href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="hdr-instagram" href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="hdr-linkedin" href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-6 collapse navbar-collapse d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              <p className="mb-0">FREE SHIPPING THIS WEEK ORDER OVER - $75</p>
            </div>

            <div className="col-md-3 d-flex justify-content-end">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CURRENCY
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LANGUAGE
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="handle_hr" />

        <div className="bottomNav ">
          {/* Center Header */}
          <div className="container d-none d-lg-block py-lg-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAtCAYAAAC07GmjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACJ7SURBVHgB7VwJfFTF/Z+Z994eOSCcISTZXMuRQ0hETkUR7yoqtVRbwROt/rUqtloliLGA4FVvW0UrtXigohatJ0LkDhISQi7IJuQkQCBcIcnuvjfz/87b7LIJV1Cx1eb3Ibz35s37zcxvfvM7Z5aSk4RBgwb1Vxk7nzAylggyCEUD8ReGPwv+KP44/poJEWWE0k1C0OVer7e4rKysoO1dF/yPA+1MJTBaOC5nqopyO5jpTNz3IicBgogWStgW3C4RhHzo8XhKXC6XO7hOSfTgXsl1pXtIF/zsILZ3bH9GmKjaXbULj8aJmI6elpx8CadkDu6Hkk4y6QnAC8Zbxwh9D2Lv9eLi4qYdcXEJbmFxxlWXfUW64GcDkZGRoVbNfqcQQgPrHGJExLTq6mPHZKIBAwYkapr6d1Q4RwhygFBhoYTayA8Lbsq8qZ8dpLdZqfZU38riHaQLfjYQ2z/uJk1VttpDLS9SSne6D+l3e7yeO1jHipBCtDAlxZKenl6F2/lEiH9w0TI0kpOLR3rF+90E+ReqHTxaI+Bo3vauBn+V+KsCw+7G1St1bMf6YOjCJYdYGN5062K4nx8ohA6whdlclLE9YIwmazjTwCOb1I4Vq2KT7o1o8lz71Lq8ZbFJMQ/Q7Ow3ZfnSuMRfCsGuIm6y7f4Q9ekChf4RzBLi+4oeArJ3COWLKbNsbWpqqqusrGyV7Q4dOrRfa2trlEppL0HpWDDaKDDiOAqxyQl/TOP8Lnz7MemCnx1AunHDMGDOsWZG5bPFQ0lrn3bqtc7hnGAQ8Y5ZyN1DY2trXfK2KibpLsbos75a4vF/WNQ1iyzsFkOIi8HFK0Sr+9bi8nJXZzsTExNj79497PwnD3h2pFH2VkgTGdar0XWAdMF3hvj4+IiQkJCBmGSuKEoBbGVP0GuaAsDiDtc0b21BgauW/AjgiEm4BcLGsIdZdZ3zHGoYN7Q0e/cEmK4mxnkO5OG/IL26o3P3OWrKn5TllTGJv1QYGwqbroFBshmETqNEdOeEPjIhVPu3m/MqDJTaLNpfdC4WlpaWZne2UzUO5xdUkPKYGtf/Ha+e0+mMsVrUF4mg7EQ4sbp0w+OZBfd4I/kJwaRJk5TCwsIbMCETMYYkrHoL7JGD8PrzMKhXi4qKVh/tu3Hjxqm7du2Yi9trMXpoF9EfOJY37t1/VX19ffOQISkjda94EZTrI80Y1DME4fcwg5QKRXmJCE5B1lvApPnkFEBMVPzFkHIj0LZHqLRY7PeuMpnOFZnU12ahKwU1Y24GGGElOl+JWJwLKvUO3EcJJm6EPrwSA/sFng9RRRkXs23rJvl9cnJyHBDng1gglLi5qKjknRN1prx/4vmayj5RKBkTXXV8BklJSX4NHb2JSNuQkjxcv4QBOQZ9GY/7YpQtJlyMxOSgjIRhslYWF5ecQ8iRduR/IyQlgf5W66swiS+F1bER9s9CaKZ6QtgQjHsqxhcuDOOx4tKtf+74bUrKwPMoUb7CQN+F2fIQ5uFLCA3h8epnT548eft7i95ZKaRJQ+hg5sN1L6jyOqpkU0al6QSailuKikr/QX4kMJlOMoBFUa/BCgiHrQWmMoO9EhDkJSGQbFXR1VMS18a8ao3jtsGGYoQ7aratCEaUmjroTCKYaZthgGdh5RQfq1HprNQ5BiBmJ1Jiq11Jx+ugVAuUim/xUT3w3gq0yyWKlJTBD2OCsoDrIzDYxLa6I9HXv+I2A4S8GIT8gvz3g5qaMvhtkORXWOwrdjQ0XLZ79+6Ao5aS4kyhRFsr5JwYfGrxli2vB3/spwOYbebmopJZKSlJTsbsbkjNmiFDhvQ1dG8xJtlWWFwSNnKks9u+fcpAqX7t9r1qy8Hw0YpVsW7eXPIp+RHBdCSStlcsxWVpnSPxLA7bHyLXjgnOp4K/wZkaxrjeUO345+hEYd1PjINbo7fvPNQRUVHRltUIIo9WFHazqqq7j9doTazzAjDHhVAhD/vLtickxKleaulbW1EWVFXaonOhVmGpiPNLS0sqj4cXDJkDxrsSuJfhm0fQnzVbtmw5SP6LIS1t8OXcgErFQvJyfmsww0koLnYVpyYnPwphMI8obE5aWtqnYKid/veQWHYQCTqT6r76wbZ1M7JEGhQUMeRTTo5pN29oewmbr/5r8h+Adt5r/5uuW9P43MIRTWFeBVmtCxDAHUqZvo0JiowE/cRDkVmwhWURsvOJoyHDBMusw/3Ha1BKuVpKMnEVCmVfbouPt6lCnawbZB5C1RtQfgk9rBYZ1Ps6/Pc+bMVK0gkA41WD2a4H81/idru9gwdH96K021iF8FROaYtG2KoefftuzM7O1jt+Kx2cbjZbgtCU0Qph/WDttDAmlhYWbikIrgODvaemkd7oWwbSfBtKSkoKBw8eHM8YuQjf9RCMbywsLP1S2lt79mx3woGTqr6HYYhPQaKC9gShvwPPgN5iUxv9jgCqeN7i3DIXdIkSwvgtip4eOHBgb8ZYGKRcdx8eESn7gJSjUV5eXiPvsVL7mN+DjvJZ3ks6YmHKlGVPXdcjNU0Z3ti47y1p/wW3CTu6m9WqDOOcnKFQRUOkoVJVvUsLCsp3dexfSkqfMM57jcH4h2ER6Iyp2bBBvyXHgGMGh6sdSQswoOsh8tfhcTXsvT+YHwgxO6am/CHyHaE6duBYSK8VaHjjq9Wu4TfFDZgOnLOgandiAq5z1Li+7Ayeo6nXI+ukXAyp9zfUicWkVFGZvqM0BMGaBY2NB+4OJjRUUYKhe/6KPlyA+mWQHiCuGItXjYyLCzeXlua24bwRkfUXUccun9HveaBKX+CfhG/C29B5hcEnIVRwFRjqauLLS8uVVIe6Q7AwGg/3MdlN5XvK4SxsueVY401NSd6LS4S03TDeq/HdM8A9FUglbkT8Ibko7DMwL6UwlbhRRCQzC7OfIBU5hHv4f+wSIvS5WDBD8b3s7z7KlORg6ZnidKYQi7YQ9dOBbzv6ZwXdesvpo0zcgQX1ib8umHk0VPsrGHsq6lehnV7UJ8wWQ6VfT46Sb2fb4gek18UljamLigpp94KYRjnmQIRyIvaCuEuBMBu930a+I2SZaPlc80HwN/HMqcG7wUNbqHjFiM4yXGfAZwuJN7HydnMukotLShNtIaFRWDXvwfac2jMiYk5QdUX3emEr0Yswxo9B4CFFxcVnwzD/CO96coVeGVT3TUN4RuBqqjEQ+EYMZodK6LhDzS12SSMidZrCnkFbxW6PN8Vmd0egrEhKKkL0FD8i6YDRNoYknB0/70xFdVt76fIKxrsHDlsYF/wv8hnmUJZ8hh17prTniopLuimKV27IwNyRA+Y7lEkvGA7E48D3tBSPHZtJTEzszizqcrQziAtxFugWU1RS2hcVpbPngOR7zl9XRhVURj/DbRjMn+FFJSUJNntILy7I+6g/GYJhBjmKYGMqF2s5p1+6FZvTXyhVIAYRhv93gev2IHwyx1FdfkFslevc/jWu1zsiqY2O7rUcqoScAG6JdV4GxDD2yUEM13Q6YmvL74+u3npddH1FNfkBgVLtfrTRAwSYDpUiGYTl5ua2trR4HjazI1T8FlKrX1t1RDDJaxj3IqYYD/hjXNSUTJIY1O7HK9+VlJQXAsW78lkYIqu4uDSzoKRkoxkQ59LzB0IubkD5PJfLVZ6bW7EfyDb7UKqBSWDMiDjcX9pyvPFAjfvt6HDyPUFKKo9HfxE493Z8Z7dbbxNSchP6JOi2xt88/r2CMdej87n+uhaLZR5edAeBHkNdGVWQNEZIhjyOex0C6o8wA/p3bEMyig2qs5WoWoAY0qZqEMblrZz2ZiqrDP6AHiUMgTk5zVlR85tah7Mf3ubApim1EevaPlUl9f46sF5hF4hpoK4KBBtigxwGempCG1B3EGHw6uAdzjzyNZX2jpQan8unwpKSf+LyzyhIfEigSxmlkGbiquPg95pYEG0PLoRm4FKXgYk6jEk+tl/0iJs2CqGY96BNKDkuCGlXS9n0gzhGsAeRIDLHYG3XijCdGqxVsjS4HAvoZZggCwsKCszxIk0a4fW0nuPT3OwG0HhyAAch/rGEWywsg7QtXj8EpJNikN7BL1oJex7KcBTnfH5tXBIMXDpJSEOW0yxHTVk7aRdb68rGJbsyLmk8E+xuSIaHWonXBi+1CZOwDoMoxmCQAqFn+WZCvE1OIcg9fzJFh3YboA7eYEdKkZflf0xVKv0FkHqId/HfYZVfhn5WwvxZCrYpAGf0I6cICgvLa1JTk6WtFQpJ2/N4ddGnOLPPlKwnpw7kOpXjlczY1PElGC4QtfB4PN3Q7yh8oEMCLgQL7w8gCfrGMDxHOEdqWyUbCH4Gbg+70NRnAIJJrgejPQXkI329ErfhcoSKlRBfVb4M9ZdXRCcOsDB6F8TuJBDrfLw6nx4WZ+4mo/UDcgoBYr+FG7ocAEX65YOtW7ceL4RDMfF/xhKfBnVTiz5eYXBjnQy1YPU+j/cXklMIgsNOpuRS2E8jjlUHC8KBmmbslBt8GTl1ABMYdjZEF9X1o5pLsOOs/r2QUpqjPqbYs6SwpPPmETvcmk9dBLVvxnZMQ5dBUgjiDzEML+vnTD0WQslbSXUVW2NrXHcy1Tocz/CURCCvim4uS66rO6WbNTdv3rxXGvdouycIc4RNkZzsHIWJvBME7DNk0KB4jG0aikNb3e4LEf74KhDboydOu31fYIr4Gy4e9DMtbdCgIUerg7mdSnwCZCfTtFMbyKVE5mU1omnpHV+lpqZOsGjatymDBo1H6lPagxW+cI/tCH6ALTc0LSXl99JZ6vguQFQww8Hq2MThsMuernEkrYeUQC5OuIF0DeJkpYKRe8A81yAIkzJgh6uIdAKiK4qrY6pd05HBiATh/ggxvBnptNfIDwBYjPFtA+ghV98R7wV9QaaDVEWZLWNr/nJpsyHCj7SaeAoSsQ+WbC/0y1zVoaGhgdWdlpAQicsEeQ80MmdJ2tqhbfhN2sEw6iARaFsUQLcElwrhC6fAXGnHyGb4QZD58kOusBdkFiH4/WmnDR6N9zKU4oahdXtwaMMcP1M04kN8hIPh9Wpy3Bbq62O7dkPhPRKfPadBVQbGQLl41hwW4XJRdvOXp6TEw17nT4MfEix2+0a5MGF+vOSjBZ8hNxz468rvNFWdD7rO7Thesz6S7g8j4Lgs9JCyqTlMvICiKeYYEOEAsyxQDOOA1a1p/XYeGRQ8WdiACbfpOktraGj6Lt9DOkmjdDyolQa6SMO1zTxAaITSAuE11hRv3bqqrTpNS0n+EuoS6l18izDBe1Ac0om5DhokHu/nwjiehUkOMXR9vcys4ZNiEOpDTHIYiCsN6s2ofynqNhJJYEouQPxtAURPK/DJcABSeDQfqhFhC/c6Sm3jMTEPYZKj8S4HE/g41bRiw+s9nyp0nrTd0M5yRHtfROD6E7+awrjQHkIYglyPNkvhVLyDIPNu9CUd7V9tjoaLe4tKD+dHIXWGIh87Cqwk45UIxYhaLqjUKkUI+q6zWJQJEELX+J0h1HmZE+NrwyCfqyq9ELS4HMVTTD+A0LfAOR/LnLkMaDc07PoAq2QCtN83ePmp3HwAbXct+NaB/PAdoNsCiVMuQotFW4Q6V+DRhf6+Zto0lF4FrOkYzwyEUR7rOI/t3Kkqh/PXYEuZrJcm2Bp0ZAYG/QwGE8kZvTihsszciVDvcKbqsNViqsueC/Y8Xf37x1rU0Ono8GeIuS0hPzCkDR58GdbNNcd6D6fhG7ju8/3PZlRd027HaKZiMhKkt4ZrHlzOVxD6WOCvZ06g4M+D/qMxHB3EzoFX+hQmLxuZjTdQfhnG1IAWXhJUKcU1OG4niWwArwwvjA0uZ2aqiS1DNP/ijn21WGx35ufn7wtGA+a7CIHnGzB550KSh+FaibZXAPlfoPaD04MwEQZOhfYf1xEvNFYdUy3zDEN/zhRYHd7quvGkqioI9IsjJBCYyfRAEfDtpVJ6E76+A4/RoJsHkvprLrxPohvtcu6QcLawECv6TGHrs1STflJLGvwV5IkXEHLUzbuHoUxOkpt8CiKuZsT4StFogdfLkLgXiDKLvczLMwxNkVHmTOKTMo8jYf+g/LYmxnktVgPSY6InJuA2xPYWkC7ogqPACQ/a1MY5n8LKv1feg5k+gNh/HznJNwPfUjLZSvWv3VzdBJb2cF1cHb+9fA3pgi44Bpx4UyTSPtJzlakUqJy6/jXR70HcLpDvIH5Nr7RvZeUO2DgXKboY08VwXXAiaCfptsXH97O43Qei2xLhYtgwrbph/0R4KTEKE+uiq8rX7IgbNB52wVahime5YH+Nqy5bSn4EkDubGSPTSRf85AC+hYAZFrBrA65ydZzzDrydoyvKG3i8a0dkUt/a3fvfRhBmHGy1ufOrXOvqHEn3e4QxG55YETy2O8Fw7bZQwxFJDWtqrOnV2PjDn3cwWE9OjcGkC356QNs7E6akQwmrjXUuxtOVeDgkCDuXM+NsRVDznIRPvYrJjNCRUKnT2r5sIIa4Dgl7M3dZHZswFjGjf8P++xbu+PTY2rIc8gOC3IRQ7XBEkC74yQFHnjehsjLgqQfU6674Aelug+cK6f4TcaeDGW/UCgX2HP2lWUGQ3ZpQx7uZ8TA7nAjfIwS7xFGz9du6WOeHXDKtD9CAuD+2unw++YFgZMajKQrhM6ncJhs8IEHz1uZNn9cZHKMzZs/VvOSlFYUzash3BOCY6VX4xxs2zMwjPwKMTp99D2ZpgkF51vqNM1eOyZgdBxI83rGe4KJyTf6MP5GfAAQcib4yBsfYA6rgYxBt12sMdTkxyJ8w4BxIGbfB6G39aks321s0GUfyH6TJPRCumodzuGiVO1rfb0uXRTCFV8ry2mhnTFV3Rw/yPcFDPPuQl9sCJis1uBgP9W7Ie7Dgzk4jEWSioZFI8r2AncO8ajT5EWD06XOdkAsPmGeKVdU8c4JsileO2/dHzoS9ZJf3GFynj4D+p6FdCie2quyJmrikJ+A4yKCgHVJvNtP5dYZKY+KrXGaiuW9DcVNd/MBrdY4EOfVkNfSN4dUHW/8Pqrex2YLwiZv8AYxwYf9t276uixoWwtn+xay7pXdd94HXR1cHsgUnDXl5WdtxeVjej0qf/Rsw3cKc/OlmHnLU6bOSEaEdQYmeszY3q1SWOZ3PWSO7HxzDuehH3PoXa4uzzN268nl0xpzrEOwsX5c/ffXIkQ93U9yhiQbVPQo1RqqcrFqR/5AZiB2ZNieSqeQ8Jkh9q9p7VW7u79rlp0cPnR1NiYpArlG3elPmcn/5yNPmDsOiG0R1noO4phUS+hBlqlid+4CZFB+WkuUIEZp3ZUlmYOuX7G/vsP2jkZ2K8ipsaV7e9AZBjGGQak2cKIXr108389Wr8/4UoMPojEfPMgR/e31eprlr58xh8xyC6+d4BS/9Nn/mt8OGvazZReOQFqrvsxpsrMfwrhAWcsAqtIsRAS9dnzfDPC8xNuPBPh4Sfg7j3oMetW5Zbu4r3jHpc9IFY02UG6luxbY6VLT0aeU8UeNe115d3dZNZRngjxSLh30uxyHrN3Hv9oKCrF1joZUIE3tX5mbWjxv+eD/ibbZl52dV+sd6ZF6MkM8gEbS2+19BH18qd4/43+9BAJkLufuXvxFfVVU/qLL2PETGX+CULrB5yAZFERU7PYd+Ye7JUg/8msgzj4QkIiq/tDouaXbH9mrjksZDNV8hD3rL8xLkJAEMBKZQllJOziOG5atRp8/5tSzv0+3A7RCFT8u0nrBqK4cMeSJUJmzhFL1KZNqGkvfBNBOFR0kQxPuxzMSAEa/zErr8zIys/mPSZiWBTzbhi0lCIa9a+O5HskhWgF5np82OBaOvEsy4AtmaZ7AQ/m4y3JDZV1FNyO3cVwpN+Ro29JMwO0YZBv/HuHFZ5iK3WLW3uJVn+HFNmvSu0je86Qmkx55RFPobu+Arx6U/HYExTUFwtIdCzJ09x6dD+mwsMJ6DMUzQiPLOyNPnTLa01Ifrgr+lcWUxbPGbNFX7xsI1uav3GoXQJWcMeWzQqFFz43UStpQJOpkw7SkLd8yX40T9J6Gzl2KM8zWjdZpHsBUKUd8Wiv2OCKtyM1XUdzHv471Wkjcqfe44wej1YYpqZjSwMt/QOTUXhtvrvrdVsVwe3NcjmC4GDMYomdX2qCBMEbChNpCokGa3eSD7ShR/Xh074MaoStdS5ApBMDN5nIaV+lakGvqhmDRJKaspW4iyR4iZDiJWSNAjktIg0ixMykdQE0s0rk4gJw10ri7oPWvzZlwnqHEjTIMZTufvrbBFs7gmJlq7ey9H9md1N9KShjL4Rsrda/Myr2LUeFko5rYrubpC0f41wHGuPB3JqXYaV+mtePPPtRszJ4pWu9wtc/tXw2wx/la9Kv0DJmYxcE1q5vwXmIBLRmTMGwp6ZTEupq7NzwTzc3N3dI8D3T6ilKfzQ2pURsajfSC9olqVpoDnv33bFqhRMUVY3GcD3+VY6Ivd9NBdBlUzMek7UXb9icnAZiGn/Ihs11D121jbpFO501gxQB+v/CkPDxbBaxjTZbjmqcwYRd36FNAsd23+g1cSm2042hu7bLjPfIBaX7QmL7MvzK5cPBy0Eq/jwiu898DRnAvL/9J1+ZlTmEIfRfZqFvLAK2Hfn5shbU6kzvDtaGJmCNkFzKBrg7t61OAw561PgLFWYCKmC6P1r/7yyJhQdCqw7ysMHX+l2uG8z2OhM4VGIP2E/P0SXWFkQ+2GTcMGOpwv6Uz/G6H8N8ghbrFy8nx5YmL3ht69A8wnqKjy38Nm+w6/CiVOUyi/Y1T6nC+xRjLlCfc+IX3BPKI+pMloyM7O0tdtzPzdqoKZOfKUH9G9lW0NH0Ce0r87ZeclV3hK22ZvFxXm+d8oLpPzgLXF9zZCOri4V6QEUW44NXR5PoBs2jSjDrTYDOKfjXFqOufFPjr6fqPlM9ddbpB/pVcXF9oonwjTYH1u7mOBTY+6QdOknZyT80hbqMlbgAUaTzoJo1OyeuL7RKQ9zUiCatjkoZwoc5iEHPRwtZaQLCgo0qxTn62NXOluyiS9lQFY9ObJrbVr75Vb2DZ6PTSljUaBrelgnm1Qkfs+X2KX5y7q97XRUeh0JXD1aaXGMszlUBtVTsfIC0G/nmdlzBsiYyVNXG13BvqoG/Via2tbGhMTL+9ZUbG/fbnrm5qEhHOpobwLZHGyVzoRqwa4KuRuiel1TmcORLwS5XAsqamorQHT9lO5Mg4ElKrrvL615XWQjmfvpPTwiX5OFwnT2yXNlPCSmpgYu66qkXCxK0nnAAKHvgYim/aSQahHZSpCPFxtCfcltc8445EEZd9zu5FUIUjgG0fDkZWV5du0Ck70iXYEf4JqopjoKhdK21sq3XzGAluqhNyHT7lb7oDkqu8cBGVcCaxrechHKBMxYBUM8mr75qFb6OFDMpQq8A1op7fwWy3duZu0wPT0dYdzL1Aw3rZBnttb3YHfNUGn2/DK4cqt8kb7zL+QPUTYn0OXKSLYhjXpoxhujErR+ttbFMlJBjOQNyAsPz9r/6iMOXUg20QM4EvQx8OJcTPQFRcU3NfunPQx02AdGS4ABhvZRJVzQZJFoNTvk6orAs6B4SaFeiNfRrOzsaD4hRjwLgxzAAj4EGyfD2ujo2McNWUrutm6nwk77g65q0UlRqO3iT8YEarOZYz+gTDbDsVQHyOdBroeorwnwibfwKGVG8eeE3ZrIajXXW21x/oIpb6uhDed1A5gmH/1iqaOkXZYRsZj/UHIJOohh3/vQ5DlClF+JW+l/YfLYNGqfo7yXZouLgcTM8x84EihpxW2MhVpoEWqzvq024GjKXQj6DlsxJBZCWYBZxehbqdDMtn59+wHI+dTZlwmlw1YeBxYpFM7ebm5NZ9dJMc5Mm269OzHEjfbdKz6qzfNLAZjhbr18EE+QimjQJtS4ju8gxSo+BWYDT6AWCF3nVPOvumIo9M7Y3dERobWOJKeBepn7EJ/Uwg+Z4d+KLC/qzbOORqLfJ3STX1Dhkliays2A/sVqC9deS9mwCMUm/986m0Q6S+g8UUGVb6xR4iI8L17WwWnchK7gWjO4/VF2iZMBCTWw2jnTjgUK+AlvGzAq5VqAgOeCRvvA5TnYM0KN+v1KURP8C8Z6XI3u2ooEk9gRTMu7U8qdI2/jDFOad2vrbQSfTXk0BM5hZk7pYpWhKE3E898SMXTgH+10JhUsx+tLn6gGs7LdHhuN3+xRNuE+Y/z4841PVVaCqmQ09ELXrXhwQqo4hcUlS2FtFgLVe3gHvqeahjyZJX32JQQXsa5YcphSh6C1pgBj3Y1pO0MvPuT1SLP+4jAoXL0N/CTu5DMcHLh7GlMHins4d6v5TA19HOsto/kOOWZFkF8u8WF2YYwAp8SmokJXYSY5TfwzO9WDGoevleF+Bh49yi6HVrOtANhWurLO/a600zXwrrHQrL9Vip3JvedMfZZXy30rap+ztS6/kmxGPViVOsN6TYB8vpr5ErHxVS61jFDjMc313BOHgchzTMYWNXvw8J8B72X7r8ZNqA7dx6iChnLCL/Ay/TzjtcXg/BrSYjd3NdlSjjOLqBEmWFQOjEnP9P8SbN1eTP+Bk1yPVTatP3uiMsw0c0G0afwhj3mrmfDQhepjDxi6el1Eea92o9bJ97pzUL/ev36h7ZxL0EYhj6AkMWVMNDN87rM4HdbDxjZUCeV1PBeCgZ5kDDlqouu8NxtjoPSwbA5ENKhV4MRFjL5Q0RtU45JaAVDHPVQ0rpNMx6CpvsN3t/PdHa1nHjZN29Q3zqC7EuzOPBveZ+zMbMAEmsUevAgPOVfrMnP/Hef/KKDRFF/22rf7qMxU29sEVZTguqK/ij1eBaboRi3dyKM/XsQ+rkVTovpKcMuneal+tdtdVfj4zv97aLO3xFkvwI9mMk1ctbqgunmsUs1wljHFHHJmoL7dtm6u1eBdmNz2sJPwXDCrU3BUOVIOhMMJ8MBwekoafw+BaLuwxp4+vC5Ar4wtrpiSvD3NTED4RXp46BiDsHZ2LW7tWlTSHi4Ym8xEjhTL4ANdLqF8WmR27Z1PuD7XwaQfO+Zh2gE+QIT9SCcnKlc13OIYnkGguWsMHbwtKVBTsT/IpzUwZO46vLVHs5HCLl1W5hSSoLcR/8IFewAN8RFEPTV4OQqW7N2xG/OUZVfDgm5ENLgQ0iC+UMh3Qa4XAdQNg128xOU0wlu3WIeBF1Oxqn1/Zx9yE8MPPsPTIUE/wp2pgMG/TWrNs74eFdzz/14rtUovex/neEknJSkC4bKuAHJiuDPA8V50JcFzKOcF12/dXeVw5EoqNXaFKqVp7X/NUgpKR+HpLyvreGNMdWuYfK+NnbgX2AIj0ZoZUVIE51zKFRcAol5H9SRy1FTfg3pgp8VfGemk1DW09nNHk5mInK+MrrG9S+zzOm0hnjIA0AdGl1ddn9NTMIInSghFkPfQSyW8w3O02Hc9Abz7cY3U4+GF9mJL7jvvGk+4a1jZAiHdMHPBr4X03UExNh6EsUmk/4yOHtXbHX58wgeV6ARMxRADT4hpq7ik5Lw6F4R3e1p0n2MqXWtrIkdcAs80rNg8+yGCr+nxpEIz1OxwHv8EM+5pAt+VnDCH705GUCOqKVOwJ4hMmltLIGq7SF/Osq/ha9ZKKbLHhph/7VOzTOTotHpjEAYcSb4LwohD9MTgwPyZ9IFP1v4QZmO+tTg3A1RUc+eUV3f3NB7UHhriPExmC4JzJeoKIZvI59CEZPj78odFNU6QqVEQfhD7EVQ4TvvQumCnw78PyhRyH/jQrBlAAAAAElFTkSuQmCC"
                  alt=""
                  className="brand-logo"
                />
              </div>
              <div className="col-md-6 text-center">
                <div class="search">
                  <span
                    class="fa fa-search"
                    style={{ lineHeight: "25px" }}
                  ></span>
                  <input placeholder="Search products..." />
                </div>
              </div>
              <div className="col-md-3 text-end">
                <div className="cart_icon">
                  <ul>
                    <li class="list-inline-item me-4">
                      <a class="hdr-user" href="#">
                        <i
                          class="fa-solid fa-user"
                          style={{ fontSize: "30px" }}
                        >
                          {" "}
                        </i>
                      </a>
                    </li>

                    <li class="list-inline-item me-4">
                      <a class="hdr-heart" href="#">
                        <i
                          class="fa-solid fa-heart"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a class="hdr-shopping" href="#">
                        <i
                          class="fa-solid fa-cart-shopping"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="handle_hr" />
          {/* Bottom  Navbar */}
          <nav class="navbar navbar-expand-lg navbar-light py-1">
            <div class="container-fluid">
              {/* <a class="navbar-brand" href="#">
              Navbar
            </a> */}

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse   "
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Service
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Attendance and Access Control Systems
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Door Locks and Controllers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Barcode Scanners
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Switches for Access Control
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Readers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          AMC
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Elevator Control System
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Our Store
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>

                <form class="d-flex d-lg-none">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className=" navbar-brand cart_icon d-lg-none">
                <ul>
                  <li class="list-inline-item">
                    <a class="hdr-user" href="#">
                      <i class="fa-solid fa-user" style={{ fontSize: "30px" }}>
                        {" "}
                      </i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a class="hdr-heart" href="#">
                      <i
                        class="fa-solid fa-heart"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a class="hdr-shopping" href="#">
                      <i
                        class="fa-solid fa-cart-shopping"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarN;
