import { Typography, Divider, Grid, Link, Stack } from '@mui/material';
import { IsMdScreen } from 'helpers/hooks';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { offerTemplates } from './Templates/OfferTemplates/OfferTemplateConstants';

export const ResourceOtherSimilarResourcesSideContainer = () => {
  const isMdScreen = IsMdScreen();

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  return (
    <>
      {!isMdScreen && (
        <Stack>
          <Typography variant='h6' paddingBottom={2}>
            {' '}
            Similar Offer Letter Templates
          </Typography>
          <Divider />
          <Grid container spacing={1} paddingTop={2}>
            {offerTemplates.slice(0, 20).map((template, index) => (
              <Grid item sm={12} md={6} key={index} spacing={3}>
                <Divider orientation='vertical' flexItem />
                <Link noWrap component={ResourceLink} href={`/resources/offer-letter-templates${template.path}/`} underline='none' color='primary' variant='body2' paddingTop={1}>
                  {truncateString(template.title, 30)}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </>
  );
};
