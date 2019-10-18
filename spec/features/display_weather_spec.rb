
feature 'show the weather' do

  scenario 'visit home page' do
    visit ('/')
    expect(page).to have_content("London")
    expect(page).to have_content("˚C")
  end

  scenario 'select city' do
    visit ('/')
    select "Sydney", from: "city"
    expect(page).to have_content("Sydney")
  end
end
