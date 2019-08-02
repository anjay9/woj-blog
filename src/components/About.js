import React from 'react';
import Container from '@material-ui/core/Container';

import Text from './Text';

export default () => {
  return (
    <Container maxWidth='md'>
      <Text type='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis metus et erat congue, in sagittis odio vehicula. Suspendisse velit lorem, congue at dui et, pulvinar lobortis velit. Phasellus ornare dignissim tempor. Ut ac magna dignissim, finibus tellus at, vehicula ante. Nullam dictum, ex non interdum semper, odio orci tristique mi, id gravida mauris ex nec dui. Etiam nec sem in turpis suscipit luctus in a dolor. Nunc pretium augue sed convallis tristique.</Text>
    </Container>
  );
}
