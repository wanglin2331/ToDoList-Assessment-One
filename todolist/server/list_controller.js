let toDoList=[];
let ID=0;

module.exports= {

    read: (req,res)=> {
        res.send(toDoList)
    },

    create: (req,res) => {
        const {text} = req.body;
        ID++;
        toDoList.push({ID, text});
        res.send(toDoList);
    },

    update: (req,res) => {
        toDoList.forEach((item,index) => {
            if (item.ID==(req.params.id)) {
                let updatedItem = Object.assign({},item,req.body);
                toDoList.splice(index,1,updatedItem);
            }
        });
        res.send(toDoList);
    },

    delete: (req, res)=> {
        toDoList.forEach((item,index)=> {
            if(item.ID==req.params.id){
                toDoList.splice(index,1)}
        });
        res.send(toDoList);
    }


}