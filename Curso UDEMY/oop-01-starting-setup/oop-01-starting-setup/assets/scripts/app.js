const productList = {
    products: [
        {
            title: "A car", 
            imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUZGRgaHBoZHBoaGBgYHBoYGBgaGRgZGhgcIS4lHB4rHxoYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGBISGjQhISExNDQxNDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ/NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUGB//EADYQAAEDAwEGBQMEAgICAwAAAAEAAhEhMUFRAwQSYXGBBZGhsfAiwdEGMkLhE/FSchRiJIKS/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACERAQEBAQACAgMBAQEAAAAAAAABEQIhMQNBBBJxUTIi/9oADAMBAAIRAxEAPwDoGo8MpZhMSoJwqxtKJGlNKAtKYhImQRgITB1UC9GUVY0ypKrY6EXORDEpXFBqDkAKBRQJQAhCEC5CVQHBSFJQJQApXNT8SUqilzVCmcUriqhGugyFtN03oGgutWU27bbgcpZqxl+K7vxNNF5X+pfCi1xIC9gY7iaud8f8ODwaLEuNWPGi3VBjarbeK7g5jjRarjSsrCaq1jJqFgl1U7XxlSxdZrtp9PCgx/0lUvfRHZmRCxng0Cle/RWPbhUEYWp5Df5Qok4DoorkNe9PUaUklMxaDcVYTNdKTKcIISnCqJqrOJAIVwVVUj9sGn6iguATJGvBQa5A/EgklGaoC5LCJQBVQpCkIkqIEKDwmcUpVChRMUCgrhLCseUoCCtwSOCueEjnKou3TbOmCaLOfsg4LVNAuSs7w98g8ljrn7alcb+rPDKEgVXm28bMtcZXvm/bs14IIXl/6t8CLCXAUKzL9Fji3BOxslAtgwjK0i3avwgwwq5UlZz6GRtNpZVvqgSIVnDLJ0KehXJUUUVwe8SiFUCa0onVU4U4wq3tmmEWsAsgjXSUwcQo9tEA4Sgsa+iq3rdw8QbpXOMgK0u80Rp2b0/Zv4XVatyHgwVib61vDLhRavdvFYJF24Ws1Nx0DiFC5Yuy3tjx9J7K6VFNxI8SrD0xQNxJZUKF1QS5AuSKF0oCXoSlclIVRY0hCVWigLyqy9OlhFVyr9z3osmlCqpVTyiOhbD2yAtN43uYewgiU+6b+8AMIpqtg9nEJXLqY3HhnjW4cDytWxhNl6b+rvApHG2+VwrtzcASFP3TMayyIVgZWCq3Cq2iMdWSs0N+kxY1WCs3cMtOQs9etGP/AIyoo/YkEqJq+HuUTdP0QLqKcS0guaUQMIByacoJCZgS8QNr6pX6ICHCYTkKgPaP3EDQZVjXURS7xs+JpGq5fb7uWv4YXUtdXksXf90DxI/cLLXNxmzXPgFpoYK224eI/wAX9isTbbLiEH6XjXKwH7MgwTZbyVn066c4QlaTcN/LfpcZHstyx4cJBlZsxqXTOKjSoCkKimLqpCVIQlEEvQRhLOUA4kzUqZ7VQXHRDhokYOEKwPoooEJCxPxKtxVQr2q3dN/DJa+Y5XVRdhJxiC0CoypZqxtN52Qe2ooRlcF+qvDP8beNjfJdr4f4gXEsfHFjon8Q3YPaWEUK4dcz7a9vCtttATMVSB4W/wD1Z4Edg+R+0rnCukzGTuZoUWEg3VzXtIg3VT9nBTRf/wCQ5RUlRT9YPctk2t04bUhVbN8CyR73AgiAMytKudtRxcINblF7qSFU2rpi9yncywQMx1wLogqgMLRM1JVodoqix2yBMwDFuSOEo2iUPqoDNEm0JpGqJFSj3VCb5uzX381o973J7a/uGuVveSWNVZ1iWa5UOIWdue9EGWGuW69Fm794eHAlgAdpqtCQWnII7VXSWdRm+HVbtvDXiWnqMgq0rnN225JpDX+juq3G7b0HUd9LhcH7LNmLKywqXGHSrhaiAIF4PssqLm3JKSmEztpJkpWvhAK2Q4tVC4kpZQQlEJCMyqtjvLHyWPa6DB4XB0HnFkVkNekfKhUeVUA2lVum4TuCR4QW7B7SQ6ag59VunhrwCDfRc3wQZ8wsndt5LbH6emVjrnWpVX6g3EPYQ8ToV5N4tuB2byBaV7gxw2rK5XFfqfwYEGlcFZnha81Tcabb7MtJBFlVK0yslRKog9v3Y+SYCfOQsLZbUACSBNKlZD96YHhsk0kBtZ6lKq59M9FY0rVNG1LpIETS1ufNbIO/kTEDVADdXNZKq4gK6/dW8WAqhThFwoUC2nQosdrVBXsXnomc3PNR4rfRFpUAkyq3uhwbUzW1B3Vkqx2wcG8ZbDRWZCCqVheIbiHiRHEPXqsviyKjVM0rUqOVDC06OC2e5b218NeAHg0NpWVv+4h4kUcPXkVoXiDDhDh781v2z6dSEOFavw/xGfoea4OvIrbDms2Y1LoFR1U7QEHFRVVcocI5q1pF0KojA8W2Ln7PgY/gLiGzEj6/orFQKzTRYnhf6U2+6Q9+8McHSDs+AvJj/wBy4Risdlv933Q7Q8ItknT8rfb9uQ2jRMyLHSV8r8r87n4vm553x955sd+Pjt5tzz9OYcFCyeqs2uxLHFroBHyUrRz8l9Tnudczrm7K42Z4pC3n2S8FpVvBCU8gtIrIOEWfSDPloTqoGnWEOAEEH55IMrdNuBQmRoIA6rI37dQ9uCD3Wp2WxBHC4gC2a9Vu9w2LG7Lha6YMkQRfqufUajyn9W+F8DuKKFcm4QvZP1P4bxsMaZt5ryzxHcCwmlEiVrpUT8CCo9b2TWuA4mh3VbFgAiAAcUFlqt0fRbPZ1I91qxItB1siwDSiqgxS9hek5jKsZwhvCJJpLjnWBgLKmvhNxQRqfskgweiVrG6Y+QqLJUggkC0DW/VRlT3gKnfXkD6DLhS+Mxz5qC0ERJ1hNNCqmNJ/dQRMAz6qOaZADYbQudMnoBPRBZNL8li7zuTNpHGCQLDicB5A1WVGKdLwPuhwVmaYVBa0NAAED7YVgalpXkpNkEAWF4luI2gkUdg/Y8llk15IklXUxx+0YWu4XUcCtt4X4nUMeehPsVnb74eNoNHYP5XL7fZuaS1w4SKa/wC1uWdRn07QkWwkIHU4GAFoPC/FIIY89DWlLHlzW+Y4kSO2O/NYsxqXTBFgrQVMAdZSls5VuxfwuDr8JB8rrn8l6nHX6+88f1qZs10m4bAMaGfygF3efwVkvMAlVbuWkl7TPFE9hACHiLjwgDLmjyMn2X5Dvm99+fdvn/Xt1pfHW/W06tHmCVqhSnVbTxl4L4/4gDuZP3WsJziSv1H4Us+DiX/Hk+T/AKqFopWmuiDW9VYyLusPXkkY8w2RU1r+NJXqYRwPwoOGf6QDDfTKBaqKttN2mCLK7cy5ji+S4OEwKAYgkoOZTJN+gwlDomaN5i5NuylmjbhgeIMQcLj/ANRfpmjiwExWOq6TcTEiWgU5VmFlbbaACSfO0LHpr28U2u5OBI4VF6ptvBGOJdw3qomxP1rR7ptKdVt932kit1zu57RbrZviBBJMRGI1OAutYjYOfwigql2RJ+ow1o6geZucKMaQZMWzM+iRxhwJAIAkCBE98rDS7jJEwYvyARL6gaiTyHNLtto50yQ0Zgig9pjyRY6bwDXhrWOWqaDxRBFSTnHNTa7MktrauLC9PugAZEQBUmhJ/Hun4KGh6/bmqHqfl+iEyYva+AM9UXiK6CDST/6gAZugYiptlAzorQmTXFEPkewRdf2/oZuhN/sLYgfNUBcagyaG00nmMqsmXZiFY0CB948lSz99a0oBa5QXAIkKB9ajNPJQm3nrmiokYWFv25t2rSDR38XadeSzG2t8sVC06elU3BxW8bNzHcDhBHkeY5LY+FeKcH0PMtsDp/S3HiG5N2jYMAgUMWjHNclvWwds3FjwZFtCDYgrcs6Ysx27XA1FrjuoD85Bcv4R4sWENcZZYT/GuOS6Le94DGHaOI4WtLuugHVYsxqXW/8ABd6A2PELy4Af/bKw9/8AEH7ScNDqUiTbPdYfgu0ndgMxJPN1aeSahpfHkvn/AI/43E767s87cer5v/MkiszOb3NzqgTF1a4W+w05qktkam2e5XveZGzF/wDV0XTyGeaPAJrgD+/kIcGuSbdP7KCH37BQix+eSZwGB0SzztVUB4p19Yqg21u3emLoxY11rS9EQJP+0FTNoZ4HVN4AuNb1usvcuEkhwc1gBBBE0gfVGAZKxNtsrOH7mzBPsrNk88MiLfU0k+UhTqLK2f8A4hH7SYxVRYu67Taljfox8youeNOH2NDRbndNp/u3sudY+Ctrum1EgeXPp5L0dOXLdDaSJvSKa4jp7qbECKSYGaml5n7obGRQRMSeWgpYflXFtYMQcDWkD5oubSAaWi2pJuSgHskkf9JALia1gAQBMVTkjytjlbzTMaMD0vrhQDioCBIgZFZPO9E4rXtnN40WPsAZ4iJMRMmwP/K/lCZ22+oHBk0AECaILmskkmgvecR53UoTQde4zPsqdmxwEGepPEa1mOeFcBesdeYm2SgJdJifM4mkpngHJjJwKH7wqtmGikZmCSKH9sgVxKs4xU4imZi8fKKhJpfucQedkCIeDiCBSP8AeUGFwJl0y6AItP8AEdALk5RdWI5SRfQx5hBY1xvH+1LVNDfteEedPXoZ0StBNKYn3+yBhgV1/wBqPN/yYStM1oAbHJGen9qSI+5HlT7IGcKHGnf2WDv+4N2jeHNYdoax21WdOaxz9uqgdTmSRHePvKDgt52TmOLXAyPLqOVllbkNtt3s2L5/xNPHqC1mCeRpGJXR+J+GN2sTRws4+rSNMrn2Da7B7mftDhDjILYyRzur1f258NfHM6mzXXeCs/8AjzWaewH3VgIxX5Tv+FPDTG7Brh9QPmDUINJraMfdef4vV/rv+R56n8A/NEBMnnHX5dM1xty5zi6WfhXZ5ykiakY9SBPaqk4NJxyGYuU/DN76aa0wh/KScajnX1+QgUxenLTyQ4+8/PwrDFIEwZObpHRTW0D+1UK+sN6SdD5/JUdyHnAjW5TW+wmnoka41p8x6qiETSfLllVPPAQQJBImmOmf6VjgbE0iuM5j8oOr7d7IHa0ikHyGaqLC/wDHd/HaQMA8NFFcNcqxvO/U0WZujq0uLH781gsPyyyd2Na50OOYW6xHQ7ptKevU2ErNb96npotNupJHlmka9cLZbuTB+mPOprW8nuuVbZHb7W+yrZWpHpE0uYvm+iYHGYie2sGQNUXGjYk1AtN5zr5WQAa2rnrp8qUwZcROOpB9O/JENOc2tSTyHr+VA4CgmxnhJaY/7YJnqgp2LDxPcXEkktNABLRBDQBWCIkq7gMkamSYk060GOwS7P6WgGAYIDZ/aInPKK3TtI8zqQKd+l9ECsEE2lx84GkWiKphT+Vhev8Ay76HOfNSJi01gaSaWt9I5ZRY+YNTMU9QJ/FkCHajiIrgyDIHKtdUzBEgB1KEUoLVIshu7QI1vQ8XT6oAmDcYPnY80dJAm0XpJA5eaAk0+FQm4E96Xik4SsqLE0nlf2nKJFwLms9/sPfkgDhMZilo0oOVPRQiK/OX3UrFDExWlrxW1I53Qey5JNRwySbYAwM2QFx9PcmlcqNYQBNfWYjP45pnwBPb0gJXsueXOJPvf1QEAAkgTc5ya+/oo/dQWkGO0ixMERBHVHZMNydO/Xv7o7HYQ2rqkc/OLRdKq7Z8Mhzy5xDeEAkcIqCXRF/pAnAJiErovU45T8+yqayCcmmRfEkjp6dUzXgiZpjzi5EnCzi6DnjM5+U7+agOgx6k8keIRMUOOl5Pz8njJn5PJVChlNOvO+Urj/VM6xTPsoXW61NeWRzVb34x8wgsJxpibViTGbIcN6ix+1ef9JXOjUdTHeNZCkxNzEk1itxMdFUHzocm5zbmhalJJoJN7x6eiDnQIkSMAm8xg9L/AOoYBvWbDEdBz1QVls0mbH8KOeJ5HMi4umdApn05iB3UaGg8UWMYv37+SoX/ACaNPkfyoj/m6KKjiD2PY5TbMxmcwNNbqriJv8+c1YSOc9beS6Obebm+oAvSaa8ludi6dKSQQZNyJ5f2ub3PaUp7TSswDSvOVvdhtJyIIsA0nzsM1hc7G4y2i+QBFxUkeQvF1GP7m1xSk2klt0pcYJpOKiOIyAcYP+lTu+w4XENLeEu+qIkvLhxOeRcmc6LKrnGZ+c+2Uz7WuBQdae+lYugygoKC0wJEg8VOs6yrASSTI7VJIMW06koFDA4Q4Ag3FwaWM+cWUe4CzQJIaJMyTxCABAxMV9VHOmRWIirqZA+0nkl2DSRxniaKBlp/7hp7CttSgtIrmggieVowLJAQAScAHJMNB/iLdEN32LWNq97yaGaY5RW9qKPJMANBmZmhilRB9xogYEVFBi5pMTbS0BE/jI5AC/3KBdQkCKi4bSa1PLX4Fa8EmHB1pANG0NCQakk9ggLQBJEU72k97+idjb1qayZtTzSME9LTYVrQdU3Fz+3sdadOqAtbit+8TXog4VqLSelgMyDc+XZXkTbkfn9qNoCSa/gTFL1QPT6T796+noo59I6x119Us/msQIvJKHGeUg649lRYwuwfXXH3/KL3QKaf9ZvNqlVufw/c9fnqgwmMCszXpAA6qKL2kAACTBmxANBWsk19E4J4iTPC0UFonEDMSUHZn+zrqqmOqBHM0pFu9ZUFxdcD5rFqf0laZdMEZP8AI+dsGg15JXPJcaQKAC5MRU4AqRbCIOALTpc0PugXZbEhoLgJgSIiDMVFTbnoi8QRYmhFHHJknGnRMDSGnUz7JHQBJJoIzY0NBrdUKYmuZNJnvCaJBEW1mOfPX5CjXQIBOtB0pJ5hF+hkyRSe8XxyVRJrEQLjoaW0oeaRxJEmbgAVrJrMC3dHiyRWugNzYeeUXA4+VuJNsZQIW1is1AAHkY5kG/3Sv/jelAJzJr5+cp3OIj1NTYA0AFTJ5JXCIBNXTTIhoJLpzLjT2ioT/wDXooi1rR+5wnNiomjhZimqZruvX0Cii7OTI3Z0GZ+A+63m57TNbUH+1FFjpvltaRbAidDWeXQaKPdmIpQcyaDylRRYaNwzMRPoIt2FKJgTEAm15ihv74QUUAP7RGl9LCRXqO5KUbQA8FS4wYGhMTJIzzmiiiB9q8ASc076U71QLnCPqIoaNMTWrnGJJifOyiiBNoyWloHFQCXAOpMAAGE+3EQHSOEVAisCthF7AQoogX/KAQ0mCRIFSYFTW2uUwePpFhU+vRFRWBdq2QYNKk9qJhkyBGs0r3rMW0UUUAa4ESDOLRyJqOanC6lYA5NsYifKVFFQxEuvJ51sLxQX0R0E6SYzU+tVFEAeKHUzFYtT4Uj2UyJ0jXXufMoqKCBtQ0NDiDWTEAGbWJ/CaK3nAves/wC6KKIBxCY7mKWqcdcqcRBFKkSJMmovennlRRUV1Fz3r1p5hWAAXuIEYqRFlFEBAripvk637/Lo6TLnWFLk6T7eqiiA/wCN2dMQBp90jXA1AmDe2BJtX5dRRBW1pNYb5KKKKj//2Q==", 
            price: 2000, 
            description: "A red car"
        }, {
            title: "A brick", 
            imageUrl: "https://www.shutterstock.com/image-illustration/3d-render-abstract-minimal-futuristic-600w-1708270069.jpg", 
            price: 4, 
            description: "A single brick"
        }
        ], 
    render() {
        const renderHook = document.getElementById("app"); 
        const prodList = document.createElement("ul");
        prodList.className = "Product-list";  
        for (const prod of this.products) {
            const prodEl = document.createElement("li");
            prodEl.className = "product-item";
            prodEl.innerHTML = ` 
            <div>
                <img scr= "${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                    <h2>${prod.title} </h2>
                    <h3>\$ ${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                    </div>
            </div>
            `;
            prodList.append(prodEl);
            }
            renderHook.append(prodList);
        }
    };
    productList.render();

    // estoy en video 241 minuto 7
    // no logro que se vean las imagenes en el sitio