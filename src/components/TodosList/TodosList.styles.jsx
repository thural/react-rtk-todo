import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export const TodosContainer = styled(Box)({
    gridColumn: '1 / 2',
    height: '100%',
    width: '100%',
    padding: '3rem',
    borderRadius: '0',
    margin: '0',
    overflowY: 'auto',
    backgroundColor: '#f1f3f5',
    boxShadow:
        'rgba(17, 17, 26, 0.1) 0px 8px 24px,\n    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
})

export const Title = styled('h2')(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '3rem',
    transition: '0.3s',
    '&:hover': {
        transform: 'scale(1.08)',
    },
}))

export const List = styled('ul')({
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    listStyle: 'none',
})

export const ItemBox = styled(Box)({
    borderBottom: '1px solid #dee2e6',
    paddingBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const Item = styled('li')(({ theme }) => ({
    color: '#495057',
    fontSize: '1.7rem',
    paddingBottom: '15px',
    fontWeight: theme.typography.fontWeightMedium,
}))

export const DetailsButton = styled(Link)(({ theme }) => ({
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '100px',
    transition: '0.3s',

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        transform: 'rotate(-8deg) scale(1.1)',
    },
}))

export const StyledLink = styled(Link)({
    textDecoration: 'none',
})
