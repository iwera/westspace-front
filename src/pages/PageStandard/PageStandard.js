import React from "react";
import styles from "./PageStandard.css";
import api from '../../common/api/api';
import PageContent from '../../common/PageContent/PageContent';

export default class PageStandard extends React.Component {

    constructor() {
        super();
        this.state = {
            page: {},
            context: { parent: {}, children: {} }
        }
    }

    updatePage(pageName) {
        api.getPage(pageName).then(data => {
            this.setState(
                {
                    page: data.data,
                    context: data.data.context
                }
            );
        });
        document.title = `West Space • ${pageName}`;
    }

    componentDidMount() {
        this.updatePage(this.props.params.splat);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.params.splat !== this.props.params.splat) {
            this.updatePage(newProps.params.splat);
        }
    }

    render() {
        const page = this.state.page;
        return (
            <div className={'page-'+this.state.context.parent.title}>
                <PageContent title={page.post_title} content={page.formatted_content} />
            </div>
        );
    }

}
