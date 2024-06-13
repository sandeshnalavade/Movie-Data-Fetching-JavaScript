fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=40e69753bd296dc12ea20d6da2d5636f")   
.then((data) => {
        return data.json();
    })
    .then((objectData) => {
        console.log(objectData.results[0].title);
        let tableData = "";
        objectData.results.map((values) => {
            tableData += `
                <tr>
                    <td>${values.title}</td>
                    <td>${values.release_date}</td>
                    <td><img src="https://image.tmdb.org/t/p/w500${values.poster_path}"/></td>
                    </tr>
            `;
        });
        document.getElementById("table_body").innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    })