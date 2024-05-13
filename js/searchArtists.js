function searchArtists() {
    const input = document.getElementById('artistSearch').value;
    const url = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(input)}&fmt=json`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';
        data.artists.forEach(artist => {
          const artistLink = document.createElement('a');
          artistLink.href = `Albums.html?artistId=${artist.id}`;  
          artistLink.textContent = artist.name;
          resultsContainer.appendChild(artistLink);
          resultsContainer.appendChild(document.createElement('br'));
        });
      })
      .catch(error => console.error('Error fetching data: ', error));
  }
  