this.setState({
    scores: update(this.state.scores, {cont: {face: {$set: data.points}}})
})
