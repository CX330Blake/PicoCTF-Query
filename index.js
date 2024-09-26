import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import tough from "tough-cookie";

var BASE_URL = "https://play.picoctf.org/users/";
var USER_AGENT = "Mozilla/5.0";

const jar = new tough.CookieJar();
const client = wrapper(axios.create({ jar }));

async function getCookies() {
    try {
        const response = await client.get("https://example.com");
        console.log(response.headers["set-cookie"]);
    } catch (error) {
        console.error(error);
    }
}

function get_scoreboard(username) {
    var url = BASE_URL + username;
    fetch(url, {
        headers: {
            origin: BASE_URL,
            referer: BASE_URL,
            "user-agent": USER_AGENT,
        },
    })
        .then((response) => {
            console.log(response);
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(
                "There has been a problem with your fetch operation:",
                error
            );
        });
}

getCookies();
// get_scoreboard("cx330");
