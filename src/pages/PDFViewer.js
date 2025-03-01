import React, { Component } from "react";

class PDFViewer extends Component {
    render() {
        const pdf = `/projects/${this.props.match.params.folder}/${this.props.match.params.pdf}.pdf`

        return (
            <div>
                <embed src={pdf} type="application/pdf"></embed>
            </div>
        );
    }
}

export default PDFViewer;