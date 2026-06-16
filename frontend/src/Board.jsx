import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Board() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 70px)',
          gap: 1, // consistent spacing
          width: 'fit-content', // prevents stretching
        }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <Paper
            key={index}
            sx={{
              width: 70,
              height: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '3px solid #c2c0c0',
              borderRadius: 0
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Board;