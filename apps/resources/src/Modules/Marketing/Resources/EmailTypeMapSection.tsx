import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { MarketingSection } from '@/components/resources/layout';
import { emailTypeMapRows } from '@/lib/marketing-data/emailTemplateCatalog';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { ShPaper } from '@smoothhiring/smooth-ui';

function MapLink({ label, href, isDedicatedHub }: { label: string; href: string; isDedicatedHub?: boolean }) {
  return (
    <ResourceLink href={href} underline='hover' color='primary'>
      {label}
      {isDedicatedHub ? ' *' : ''}
    </ResourceLink>
  );
}

export const EmailTypeMapSection = () => {
  return (
    <MarketingSection
      id='email-type-map'
      title='Complete hiring email map'
      description='Every recruiting email your team needs — items marked * link to dedicated template libraries.'
      py={4}
    >
      <ShPaper variant='outlined' noPadding>
        <TableContainer>
          <Table size='small' aria-label='Hiring email type map'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='subtitle2'>Sourcing &amp; outreach</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='subtitle2'>Interview stage</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='subtitle2'>Decision &amp; follow-up</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emailTypeMapRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <MapLink {...row.sourcing} />
                  </TableCell>
                  <TableCell>
                    <MapLink {...row.interview} />
                  </TableCell>
                  <TableCell>
                    <MapLink {...row.decision} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ShPaper>
      <Typography variant='caption' color='text.secondary' display='block' marginTop={1}>
        * Dedicated template hub with multiple variants
      </Typography>
    </MarketingSection>
  );
};

export default EmailTypeMapSection;
