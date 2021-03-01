const Data = {
    f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
    },
    f02: {
        name: "Bob",
        age: 20,
        follows: ["f05", "f06"]
    },
    f03: {
        name: "Charlie",
        age: 35,
        follows: ["f01", "f04", "f06"]
    },
    f04: {
        name: "Debbie",
        age: 40,
        follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
        name: "Elizabeth",
        age: 45,
        follows: ["f04"]
    },
    f06: {
        name: "Finn",
        age: 25,
        follows: ["f05"]
    }
};

function biggestFollower(Data){
	const keys = Object.keys(Data);
	var biggestFollowerKey = null;
    var biggestFollowerCount = 0;
	keys.forEach(function (entry) {
        const data = Data[entry];
        if (data.follows.length > biggestFollowerCount) {
            biggestFollowerCount = data.follows.length;
            biggestFollowerKey = entry;
        }
    });
	return Data[biggestFollowerKey].name;
}

console.log('biggest follower',biggestFollower(Data));

function mostPopular(Data){
	const keys = Object.keys(Data);
	var follower = {};
	keys.forEach(function (entry) {
        var data = Data[entry];
        data.follows.forEach(function (follow) {
            var count = follower[follow];
            if (count) {
                count = count + 1;
                follower[follow] = count;
            } else {
                follower[follow] = 1;
            }
        });
    });
	
	var maxfollower = [];
	var maxValue = 0;	
	
	
	Object.keys(follower).forEach(function (key) { 

		
		if(follower[key] >= maxValue ){
		
			if(follower[key] > maxValue){
				maxfollower = [];
				maxfollower.push(Data[key].name); 				
				maxValue = follower[key];							
			}else{
				maxfollower.push(Data[key].name); 
			}					
			
		}		
    });

	return maxfollower;
	
}


console.log('most popular',mostPopular(Data));


function  unrequitedFollowers(Data){

    const keys = Object.keys(Data);
    var unrequitedFollowerss = [];
    keys.forEach(function (entry) {			
            Data[entry].follows.forEach(follow => {
                if(!Data[follow].follows.includes(entry) && !unrequitedFollowerss.includes(entry)){
                    unrequitedFollowerss.push(Data[entry].name);
                }
            })
    });
   return unrequitedFollowerss;
   
}

console.log('unrequitedFollowers',unrequitedFollowers(Data));


function printAll(Data){
	const keys = Object.keys(Data);
	var allFollowers = {};
	keys.forEach(function (entry) {
			var individualFollowers = [];
			Data[entry].follows.forEach(function(follow){				
				individualFollowers.push(Data[follow].name); 								
			});
			allFollowers[Data[entry].name] = individualFollowers;
	});			
	return allFollowers;

}
console.log('printAll',printAll(Data));
