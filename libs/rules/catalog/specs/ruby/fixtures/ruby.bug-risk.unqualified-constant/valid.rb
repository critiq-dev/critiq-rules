# Qualified constant reference (not bare)
module MyGem
  class Config < MyGem::Base
  end
end

# Class defined in same scope
module MyGem
  class Base
  end

  class Config < Base
  end
end
