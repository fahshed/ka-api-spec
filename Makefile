# all: lint lint-private

# lint: lint-mentor lint-student lint-admin

# lint-mentor:
# 	spectral lint -F warn spec/v3/mentor-app/v3.mentor.spec.yml

# lint-student:
# 	spectral lint -F warn spec/v3/student-app/v3.student.spec.yml

# lint-admin:
# 	spectral lint -F warn spec/v3/admin-dash/v3.admin.spec.yml

lint:
	spectral lint -F warn spec/v1/v1.spec.yml
