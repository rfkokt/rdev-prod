import { getBaseUrl, getParams } from 'src/helpers/url';


export const getPageOgImageUrl = ({
                                      caption,
                                      title,
                                      description,
                                  }) => ({
    default: encodeURI(
        `${getBaseUrl()}/api/og-page?${getParams({ caption, title, description })}`
    ),
});
