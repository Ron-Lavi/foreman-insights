import React from 'react';
import { Battery, Section } from '@redhat-cloud-services/frontend-components';
import './hits.scss';

export default () => (
  <Section type="icon-group">
    <Battery label="test" severity="critical" />
  </Section>
);
