var itemDetails = [
{ id: 1, track_number: 1101, truck_number: 1001, mobile: 9876543211, customer: 'Ramesh Kumar', order_date: '10-July-2021' , location: 'Gurgaon', status: 'Delivered' },
{ id: 2, track_number: 1102, truck_number: 1002, mobile: 9876543211, customer: 'Mahesh Kumar', order_date: '01-Dec-2021' , location: 'Delhi', status: 'Delivered'  },
{ id: 3, track_number: 1103, truck_number: 1003, mobile: 9876543211, customer: 'Nitin Sharma', order_date: '12-Dec-2021' , location: 'Jaipur', status: 'Dispatched'  },
{ id: 4, track_number: 1104, truck_number: 1004, mobile: 9876543211, customer: 'Anoop Kumar', order_date: '10-Nov-2021', location: 'Noida', status: 'Dispatched'  },
{ id: 5, track_number: 1105, truck_number: 1005, mobile: 9876543211, customer: 'Anil Singh', order_date: '27-Oct-2021' , location: 'Gurgaon', status: 'Delivered'  },
{ id: 6, track_number: 1106, truck_number: 1006, mobile: 9876543211, customer: 'Bhupesh Singh', order_date: '12-Nov-2021', location: 'Delhi', status: 'Delivered'  },
{ id: 7, track_number: 1107, truck_number: 1007, mobile: 9876543211, customer: 'Dinesh Kumar', order_date: '19-Dec-2021', location: 'Mumbai', status: 'Delivered'  },
{ id: 8, track_number: 1108, truck_number: 1008, mobile: 9876543211, customer: 'Ravi Tiwari', order_date: '28-Dec-2021', location: 'Jaipur', status: 'Delivered'  },
{ id: 9, track_number: 1109, truck_number: 1009, mobile: 9876543211, customer: 'Jagdish Prasad', order_date: '29-Dec-2021', location: 'Noida', status: 'Delivered'  },
{ id: 10, track_number: 1110, truck_number: 1010, mobile: 9876543211, customer: 'Ankit Chauhan' , order_date: '30-Dec-2021', location: 'Gurgaon', status: 'Delivered'  },
];

function searchItem(track, truck){
	var len = itemDetails.length;
	var searchData = [];
for(var i = 0; i < len; i++){
	if(itemDetails[i].track_number == track){
		//console.log(itemDetails[i]);
		searchData.push(itemDetails[i]);
	}
	
}

return searchData;	

}
function searchResult(){
	var track_number = document.getElementById('track_number').value;
	var truck_number = document.getElementById('truck_number').value;
	//alert(track_number + " " + truck_number);
	var searchData = searchItem(track_number, truck_number);
	//var data = JSON.stringify(searchData);
	//alert(searchData.length);
	var cname = document.getElementById('cname');
	var location = document.getElementById('location');
	var track = document.getElementById('track');
	var truck = document.getElementById('truck');
	var odate = document.getElementById('odate');
	var status = document.getElementById('status');
	cname.innerHTML = `Customer Name: ${searchData[0].customer}`;
	location.innerHTML = `Location: ${searchData[0].location}`;
	track.innerHTML = `Order Tracking ID: ${searchData[0].track_number}`;
	truck.innerHTML = `Truck Number ${searchData[0].truck_number}`;
	odate.innerHTML = `Order Date ${searchData[0].order_date}`;
	status.innerHTML = `Order Status ${searchData[0].status}`;
}

window.onload = function(){
document.getElementById('track_number').focus();	
}
