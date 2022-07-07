import { validateBalance } from './utils/validateBalance.js';
import { getHeader } from './components/header.js';
import { getUsers } from './components/users.js';
import { getFooter } from './components/footer.js';
import { modalAntiquity } from './components/modalAntiquity.js';
import { modalClientDetails } from './components/modalClientDetails.js';

const API_URL = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

const runApp = async(filter = false) => {

    document.getElementById("app").innerHTML = "";

    fetch(`${API_URL}`)
        .then(response => response.json())
        .then((data) => {
            if (data.length > 0 && typeof data != null) {
                if (filter && filter === true) {

                    document.getElementById("loader").style.display = "block";
                    document.getElementById("app").style.display = "none";

                    const usersGold = data.filter(user => validateBalance(user.balance) > 5000.00);
                    getUsers(usersGold);

                    setInterval(function() {
                        document.getElementById("loader").style.display = "none";
                        document.getElementById("app").style.display = "block";
                    }, 2500)

                } else {

                    getUsers(data);
                    setInterval(function() {
                        document.getElementById("loader").style.display = "none";
                        document.getElementById("app").style.display = "block";
                    }, 2500)

                }
            }
        }).catch((error) => {
            console.log(error);
        });
}

await getHeader();
await runApp();
await getFooter();
await modalAntiquity();
await modalClientDetails();

export { runApp }