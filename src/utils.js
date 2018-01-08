const ENDPOINT = 'http://localhost:4000/db'


export function getProfiles() {
  return fetch(ENDPOINT)
	.then(res => res.json())
	.catch(err => {
	  console.log('err: ', err)
	})
}
