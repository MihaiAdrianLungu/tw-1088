import { useState, useEffect } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'

const store = new CompanyStore()

const CompanyList = () => {
	const [companies, setCompanies] = useState([])

	const saveCompany = (id, company) => {
		store.saveOne(id, company)
	}

	useEffect(() => {
		setCompanies(store.getAll());
	}, [])

	return (
		<div>
			{
				companies?.map(company => (
					<Company key={company.id} item={company} onSave={saveCompany} />
				))
			}
		</div>
	)
}

export default CompanyList
