
////////////////////////////////FUFA BONITO

handleEditCard(data) {
    //console.log(data);
    var cont = 0;
    var index = 0;
    var auxdict;

    //Getting index
    var index = scores.findIndex(function(findedplayer) {
        return findedplayer.player === data.name
    })

    //Copying to an aux variable and modifying it
    auxdict = JSON.stringify(scores[index]);
    auxdict = JSON.parse(auxdict);

    auxdict[data.side] = data.points;

    //Deleting old card
    this.setState({
        scores: this.state.scores.filter((j, i) => {
            return i !== index
        })
    })

    //console.log("editado ", auxdict); //Checking edit
    //console.log("tras remove ", auxdict); //Checking edit

    //Adding modified card
    this.handleAddCard(auxdict);

    //console.log("final ", auxdict); //Checking edit
    //Borrar luego
    //console.log(this.state.scores);


}


///////////////////////////////////FUFA
handleEditCard(data) {
    //console.log(data);
    var cont = 0;
    var index = 0;
    var auxdict;

    this.state.scores.forEach((score) => {
        if (score.player === data.name) {
            //console.log(cont); //Calcula el indice
            //var auxdict = score;
            auxdict = JSON.stringify(score);
            auxdict = JSON.parse(auxdict);
            //console.log("este es ", auxdict); //Checking copy

            //index = cont;
            this.setState({
                scores: this.state.scores.filter((j, i) => {
                    return i !== index
                })
            })
        }
        //cont++;
    });

    auxdict[data.side] = data.points;
    console.log("editado ", auxdict); //Checking edit

    console.log("tras remove ", auxdict); //Checking edit
    this.handleAddCard(auxdict);
    console.log("final ", auxdict); //Checking edit
    //Borrar luego
    //console.log(this.state.scores);
}



/////////////////////////////////////////////////////////////////PETA
this.handleChange = this.handleChange.bind(this);

handleChange = (e, face, index) => {
    this.setState(prevState => ({
        scores: {
            ...prevState.scores,
            [prevState.scores[index].face]: e.target.value,
        },
    }));
};

handleEditCard(data) {
    //console.log(data);
    var auxdict;
    var face = data.side;

    //Calcula el indice a partir de la key del
    var index = scores.findIndex(function(findedplayer) {
        return findedplayer.player === data.name
    })

    console.log("Este si", index);

    auxdict = JSON.stringify(scores[index]);
    auxdict = JSON.parse(auxdict);

    //Edit value
    auxdict[data.side] = data.points;
    console.log("editado ", auxdict); //Checking edit

    /*var auxscore = this.state.scores
    this.setState({
        scores: ([...auxscore, auxdict]).filter((j, i) => {
            return i !== index
        })
        scores[index].face : data.poin
    })*/

    this.setState(prevState => ({
        scores: {
            ...prevState.scores,
            [prevState.scores[index].face]: data.points,
        },
    }));

    //handleChange(e, data.side, index);

    console.log("tras remove ", auxdict); //Checking edit
    console.log("final ", auxdict); //Checking edit
    //Borrar luego
    //console.log(this.state.scores);
}


//Ultimo cambio, hace cosas raras
handleEditCard(data) {
    //console.log(data);
    var auxdict;
    var newindex = this.state.scores.length - 1;
    console.log("El nuevo indice", newindex);

    //Getting index
    var index = scores.findIndex(function(findedplayer) {
        return findedplayer.player === data.name
    })

    //Copying to an aux variable and modifying it
    auxdict = JSON.stringify(scores[index]);
    auxdict = JSON.parse(auxdict);

    auxdict[data.side] = data.points;
    console.log(this.state);
    //Deleting old card
    this.setState({
        scores: this.state.scores.splice(index, 1)
    })
    console.log(this.state);
    //console.log("editado ", auxdict); //Checking edit
    //console.log("tras remove ", auxdict); //Checking edit

    //Adding modified card
    //this.handleAddCard(auxdict);

    //console.log("final ", auxdict); //Checking edit
    //Borrar luego
    //console.log(this.state.scores);


}

///////////////////////Peta mucho pero esta bonito el codigo///////////
//Edit player
handleEditCard(data) {
    console.log("data:", data);
    var auxdict;
    //var newindex = this.state.scores.length - 1;
    //console.log("El nuevo indice", newindex);

    //Getting index
    var index = scores.findIndex(function(findedplayer) {
        return findedplayer.player === data.name
    })
    console.log("El indice a borrar", index);

    //Copying to an aux variable and modifying it
    auxdict = JSON.stringify(scores[index]);
    auxdict = JSON.parse(auxdict);

    //Edit points' value with the new value
    auxdict[data.side] = data.points;
    console.log(" auxdict editado ", auxdict); //Checking edit

    //Deleting old card
    this.removeCard(index);
    console.log("tras remove ", this.state.scores); //Checking edit

    //Adding modified card
    this.handleAddCard(auxdict);
    //console.log("añadido nuevo", this.state.scores); //Checking edit
}
