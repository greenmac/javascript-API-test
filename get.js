const url = "https://www.hpa.gov.tw/wf/newsapi.ashx?startdate=2022/07/23";

function getData(){
	fetch(url).then(function(response){
		return response.json();
	}).then(function(data){
		//console.log(data);
		const list = document.querySelector('.list');
		let str = "";
		for(let i = 0; i < data.length;i++){
			const news = data[i];
			
			let addStr="";
				for(let j = 0 ; j < news.附加檔案.length;j++){
					const dataNews = news.附加檔案[j];
					console.log(dataNews);
					let addContent =`
					<ul>
					<li>${dataNews.檔案說明}</li>
					<li>${dataNews.檔案名稱}</li>
					<li>${dataNews.連結位置}</li>
					</ul>`
					addStr += addContent;
					
				}
			
			let content =`
			<tr>
				<td>${news.標題}</td>
				<td>${news.內容}</td>
				<td>${news.連結網址}</td>
				<td>`+addStr+`</td>
				<td>${news.發布日期}</td>
				<td>${news.修改日期}</td>
				</tr>`;
			str+=content;
			list.innerHTML=str;
		
		}
	}
	);
}
getData();