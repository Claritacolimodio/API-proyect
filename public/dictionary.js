class Dictionary {

    doLookup(word) {
        return fetch('/lookup/' + word)
            .then(response => response.json());
    }

    save(postBody) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };
        return fetch('/save/', fetchOptions);
    }

    delete(wordToDelete) {
        const deleteBody = {word: wordToDelete}
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deleteBody)
        };
        
        return fetch('/delete/', fetchOptions);
    }

}


export default Dictionary;