
export interface Phone {
id: string
name: string
feature: string
icon: string
}

const DB_NAME = "phones-db"

export function openDB(): Promise<IDBDatabase>{

return new Promise((resolve,reject)=>{

const req = indexedDB.open(DB_NAME,1)

req.onupgradeneeded = () => {

const db = req.result
db.createObjectStore("phones",{keyPath:"id"})

}

req.onsuccess = () => resolve(req.result)
req.onerror = () => reject(req.error)

})

}

export async function savePhones(data:Phone[]){

const db = await openDB()

const tx = db.transaction("phones","readwrite")
const store = tx.objectStore("phones")

for(const p of data){
store.put(p)
}

}

export async function getPhones():Promise<Phone[]>{

const db = await openDB()

return new Promise(resolve=>{

const tx = db.transaction("phones","readonly")
const store = tx.objectStore("phones")
const req = store.getAll()

req.onsuccess = () => resolve(req.result)

})

}

