/*
 * ＠author 林彥佑 <newxmith@gmail.com>
 */

export async function GET() {
    // get access token 
    const token = await getToken();
    console.log(token);
    //get data from TDX api
    if (token) {
        const apiData = await fetchData(token);
        return Response.json(apiData);
    } else {
        return Response.json(
            { error: 'Failed to retrieve access token' },
            { status: 401 },
        )
    }

}

async function getToken() {
    const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
    const tokenParams = new URLSearchParams();
    tokenParams.append("grant_type", "client_credentials");
    tokenParams.append("client_id", process.env.TDX_CLIENT_ID);
    tokenParams.append("client_secret", process.env.TDX_CLIENT_SECRET);
    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: tokenParams,
        });
        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data.access_token;
        } else {
            console.error("Error fetching token:", response.status);
        }
    } catch (error) {
        console.log('Error fetching token:', error);
    }
}

async function fetchData(token) {
    const apiurl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty";

    try {
        const response = await fetch(apiurl, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data;
        } else {
            console.error("Error fetching token:", response.status);
        }
    } catch (error) {
        console.error('Error fetching data data:', error);
    }
}

// async function fetchData(token){
//     const apiurl= "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty";
//     try{
//         const response = await fetch(apiurl,{
//             method:'GET',
//             headers:{
//                 Authorization:'Bearer $(token)',
//                 'content-Type':'application/json',
//             }
//         })
//     }catch (error){
//         console.error('Error fetching data:',error);
//     }

//     return null;
// }