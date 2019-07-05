const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true}, (err)=>{
	if(err) console.log('conection err.', e);
	else console.log('connection success.');
});

mongoose.connection.on('error', (err)=>{
	console.log('connection error', err);
});
mongoose.connection.on('disconnected', ()=>{
	console.log('disconnected.');
});


const UserSchema = new Schema({
	name : {
		type:String,
		required : true,
		unique : true,
	},
	age : {
		type : Number,
		required : true
	},
	married : Boolean
});

const User = mongoose.model('User', UserSchema);  //show collections


async function run(){
	try{
		let lee = new User({name : 'Lee', age:27, married : true});  //db.users.find()
		let result = await lee.save();
		console.log('Lee save success :', result);

		let kim = new User({name: 'Kim', age:24, married : false});
		result = await kim.save();
		console.log('Kim save success.', result);


		let res = await  User.update({name : 'Kim'}, {married: true})
		console.log('update success:', res);

		let users = await User.find({})
		console.log('find result:', users);

		res = await User.remove({name:'Kim'})
		console.log('remove sucess:', res);

		users = await User.find({})
		console.log('find result:', users);
		
	}catch(err){
		console.log('err:', err);
	}
	
}

run();
