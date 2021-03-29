/* eslint no-magic-numbers: "off" */

export default function createTextContentStyle({
  bubbleMaxWidth,
  bubbleMinHeight,
  markdownExternalLinkIconImage,
  primaryFont,
  paddingRegular
}) {
  return {
    fontFamily: primaryFont,
    margin: 0,
    minHeight: bubbleMinHeight - paddingRegular * 2,
    padding: paddingRegular,

    '& > :first-child': {
      marginTop: 0
    },

    '& > :last-child': {
      marginBottom: 0
    },

    '&.markdown': {
      '& img:not(.webchat__markdown__external-link-icon)': {
        maxWidth: bubbleMaxWidth,
        width: '100%'
      },

      '& img.webchat__markdown__external-link-icon': {
        backgroundImage: markdownExternalLinkIconImage,
        height: '.75em',
        marginLeft: '.25em'
      },

      '& pre': {
        overflow: 'hidden'
      }
    }
  };
}
