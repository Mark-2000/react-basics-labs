import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';

const Task = (props) => {
    
    return (
      <Grid
        key={props.id}
        size={{ phone: 12, tablet: 6, large: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <Card
          sx={{
            backgroundColor: props.done ? 'lightgrey' : 'lavender',
            padding: '25px',
            color: "indigo",
          }}
        >
          <CardHeader
            title={props.title}
            sx={{
              backgroundColor: 'white',
              borderRadius: '3px',
              padding: '20px',
              textAlign: 'center'
            }}
          />

          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
                padding: '20px'
              }}
            >
              <Typography
                component="p"
                variant="subtitle2"
                color="text.primary"
              >
                <AccessTimeIcon sx={{ mr: 1 }} />
                Due: {props.deadline}
              </Typography>
            </Box>

            <Typography
              component="p"
              variant="subtitle1"
              align="center"
              sx={{ fontStyle: 'italic' }}
            >
              <EventNoteIcon sx={{ mr: 1 }} />
              {props.description}
            </Typography>

            <Typography
              component="p"
              variant="subtitle2"
              align="center"
              padding="20px"
              sx={{ backgroundColor: props.priority === 'High' ? 'red' : props.priority === 'Medium' ? 'orange' : 'yellow', fontWeight: 'bold', borderRadius: '4px', marginTop: '20px' }}
            >
              {props.priority} Priority
            </Typography>

          </CardContent>

          <CardActions
            sx={{
              justifyContent: 'space-between',
              padding: '20px'
            }}
          >
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={props.markDone}
              startIcon={<DoneIcon />}
            >
              Done
            </Button>
            
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={props.deleteTask}
              startIcon={<DeleteIcon />}
              
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>

    )
}

export default Task;
