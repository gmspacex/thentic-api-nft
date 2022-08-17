const axios = require("axios");

const deployNFT = async () => {
	const res = await axios({
		method: 'POST',
		url: 'https://thentic.tech/api/nfts/contract',
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			key: '8rsFlN3Su3m9tIMwuM1yvWvuxgwmEZzB',
			chain_id: '97',
			name: 'Gmspacex NFT',
			short_name: 'GNFT'
		}
	})
	console.log(res.data);
}

const showContracts = async () => {
	const res = await axios({
		method: 'get',
		url: 'https://thentic.tech/api/contracts',
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			key: '8rsFlN3Su3m9tIMwuM1yvWvuxgwmEZzB',
			chain_id: '97',
		}
	})
	console.log(res.data);
}

showContracts();