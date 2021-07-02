class Album {
  title:string;
  songs:string[];
  constructor (title, songs:string[]){
    this.title = title;
    this.songs = songs;
  }
}

class Banda {
  members: string[]
  albums: Album[]
  constructor(members:string[], albums:Album[]){
    this.members = members;
    this.albums = albums;

  }
}

function main (){
  console.log("hay un cambio")
  const unAlbum = {
    title: "Album de marce",
    songs: ["tu vieja"],
  };
  
  const unaBanda = new Banda(["Andy"], [unAlbum, unAlbum, unAlbum]);
  // console.log(unaBanda.members)
  console.log(unaBanda.albums);

}

main()