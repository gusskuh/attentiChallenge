var data = 
     [
        {
            "_id" : "abc",
            "type": "1",
            "topic_name": "Markets",
            "doc_num": "246"
        },
        {
            "_id" : "abe",
            "type": "2",
            "topic_name": "Business Sector",
            "doc_num": "44444444"
        },
        {
            "_id" : "abv",
            "type": "3",
            "topic_name": "Events",
            "doc_num": "321698"
        },
        {
            "_id" : "abn",
            "type": "3",
            "topic_name": "Business Events",
            "doc_num": "1"
        },
        {
            "_id" : "abm",
            "type": "2",
            "topic_name": "Deals",
            "doc_num": "44444444"
        }
    ]



function getData(){
    console.log(data);
    return Promise.resolve(data)
}

function remove(itemId){
    let idx = data.findIndex( item => item._id === itemId)
    data.splice(idx,1)
    return Promise.resolve(data)
}

function update(input) {
    let idx = data.findIndex( item => item._id === input.entryId)
    data[idx].topic_name = input.val
    return Promise.resolve(data)
}

export default {
    getData,
    remove,
    update
}