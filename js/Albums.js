window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const artistId = params.get('artistId');
    if (artistId) {
      displayAlbums(artistId);
    } else {
      console.error('No artist ID found in URL');
    }
  };
  
  function displayAlbums(artistId) {
    const url = `https://musicbrainz.org/ws/2/release-group/?artist=${artistId}&fmt=json`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Debugging: Log the data received
        const albumsContainer = document.getElementById('albums');
        if (data['release-groups'] && data['release-groups'].length > 0) {
          albumsContainer.innerHTML = '<table class="table"><thead><tr><th>Release Date</th><th>Title</th></tr></thead><tbody></tbody></table>';
          const tableBody = albumsContainer.querySelector('tbody');
          data['release-groups'].forEach(album => {
            const row = tableBody.insertRow();
            const cellDate = row.insertCell();
            const cellName = row.insertCell();
            cellDate.textContent = album['first-release-date'];
            cellName.textContent = album.title;
          });
        } else {
          albumsContainer.innerHTML = '<p>No albums found for this artist.</p>'; // 显示无结果信息
        }
      })
      .catch(error => {
        console.error('Error fetching albums: ', error);
        document.getElementById('albums').innerHTML = '<p>Error loading albums.</p>'; // 显示错误信息
      });
  }
  