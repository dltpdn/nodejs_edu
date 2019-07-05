//npm install sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'admin', {
		host : 'localhost',
		dialect : 'mysql'
});

sequelize.authenticate().then(()=>{
	console.log('connection sucess.');
}).catch(err=>{
	console.log('connection err.', err);
});

sequelize.sync();
let Memo = sequelize.define('memo', {
	id : {
		type : Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true
	  },
	  title: {
	    type: Sequelize.STRING,
	    allowNull: true
	  },
	  body: {
	    type: Sequelize.TEXT,
	    allowNull: true
	  }
});

async function run(){
	try{
		await Memo.create({
			title: 'Practice of Sequelize.js',
			body: 'Sequelize.js is ORM for Node.js.'
		});
		await 	Memo.create({
			title: 'memo test2',
			body: 'this is memo body of test 2'
		})
		let memos = await  Memo.findAll();
		for( m of memos){
			console.log(m.dataValues)	
		}
		
		let memo = await  Memo.findOne({where:{title: 'memo test2'}});
		console.log(memo.dataValues);
	}catch(e){
		console.log('insert err', e);
	}
}

run();
