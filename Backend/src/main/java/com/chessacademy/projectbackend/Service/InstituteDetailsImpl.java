package com.chessacademy.projectbackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chessacademy.projectbackend.Models.InstituteModel;
import com.chessacademy.projectbackend.Repository.InstituteRepository;

@Service
public class InstituteDetailsImpl implements InstituteService {

	@Autowired
	InstituteRepository instituteRepo;

	@Override
	public InstituteModel addInstitute(InstituteModel user) {
		// TODO Auto-generated method stub
		return instituteRepo.save(user);
	}

	@Override
	public List<InstituteModel> viewInstitute() {
		// TODO Auto-generated method stub
		return instituteRepo.findAll();
	}

	@Override
	public InstituteModel viewInstituteByName(String instituteName) {
		// TODO Auto-generated method stub
		return instituteRepo.findByInstituteName(instituteName);
	}

	@Override
	public InstituteModel deleteInstitute(int instituteId) {
		// TODO Auto-generated method stub

		instituteRepo.deleteById(instituteId);
		;
		return null;
	}

	@Override
	public InstituteModel updateInstitute(int id, InstituteModel user) {
		// TODO Auto-generated method stub
		InstituteModel institute = instituteRepo.findByInstituteId(id);
		institute.setInstituteName(user.getInstituteName());
		institute.setInstituteDescription(user.getInstituteDescription());
		institute.setInstituteAddress(user.getInstituteAddress());
		institute.setInstituteimgurl(user.getInstituteimgurl());
		institute.setMobile(user.getMobile());
		institute.setEmail(user.getEmail());
		return instituteRepo.save(institute);
	}

	@Override
	public InstituteModel viewInstituteById(int instituteId) {
		// TODO Auto-generated method stub
		return instituteRepo.findByInstituteId(instituteId);

	}

}
